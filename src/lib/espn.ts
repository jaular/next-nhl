import { z } from "zod";
import { Schedule } from "~/schemas/schedule";
import { Team, Teams } from "~/schemas/teams";

export async function getTeamData(teamId: string) {
  const res = await fetch(
    `https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/${teamId}/schedule`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return undefined;
  const data: z.infer<typeof Schedule> = await res.json();

  const games = data.events.map((event) => {
    const favoriteTeam = event.competitions[0].competitors.find(
      (competitor) => competitor.team.id === teamId
    );
    const otherTeam = event.competitions[0].competitors.find(
      (competitor) => competitor.team.id !== teamId
    );

    if (!favoriteTeam || !otherTeam) {
      throw new Error(
        "Expected to find both a favorite team and an opposing team in the event competitors"
      );
    }

    // Some teams don't have logos, use the default
    const logo = otherTeam.team.logos
      ? otherTeam.team.logos[0].href
      : "https://a.espncdn.com/i/teamlogos/default-team-logo-500.png";

    return {
      date: event.competitions[0].status.type.shortDetail,
      name: otherTeam.team.displayName,
      teamId: otherTeam.team.id,
      logo,
      // @ts-ignore: These are definitely there
      homeScore: favoriteTeam.score?.value,
      // @ts-ignore: These are definitely there
      awayScore: otherTeam.score?.value,
      // @ts-ignore: These are definitely there
      winner: favoriteTeam.winner,
    };
  });

  return {
    id: teamId,
    name: data.team.displayName,
    logo: data.team.logo,
    color: data.team.color,
    record: data.team.recordSummary,
    standing: data.team.standingSummary,
    games,
  };
}

export async function getAllTeamIds() {
  const pagePromises: Promise<z.infer<typeof Teams>>[] = [];
  for (let page = 1; page <= 8; page++) {
    pagePromises.push(
      fetch(
        `http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams?page=${page}`
      ).then((res) => res.json())
    );
  }

  const dataArray = await Promise.all(pagePromises);
  let teams: z.infer<typeof Team>[] = [];
  for (const data of dataArray) {
    teams = teams.concat(
      data.sports[0].leagues[0].teams.map((team) => team.team)
    );
  }

  // Sort teams alphabetically a-Z
  teams.sort((a, b) => (a.displayName > b.displayName ? 1 : -1));
  return teams;
}
