import { notFound } from "next/navigation";
import { getAllTeamIds, getTeamData } from "~/lib/espn";
import Container from "~/components/Container";
import Info from "~/components/Info";
import Select from "~/components/Select";
import Row from "~/components/Row";

export default async function HomePage({
  params,
}: {
  params: { teamId: string };
}) {
  const [team, allTeams] = await Promise.all([
    getTeamData(params.teamId),
    getAllTeamIds(),
  ]);

  if (!team) {
    notFound();
  }

  const { name, logo, color, record, standing, games } = team;

  return (
    <>
      <Container color={color}>
        <Info name={name} logo={logo} record={record} standing={standing} />

        <Select allTeams={allTeams} teamId={params.teamId} />

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Schedule:</h2>
          <div>
            {games.map((game, index) => {
              return (
                <Row
                  key={game.name}
                  index={index}
                  isLast={index === games.length - 1}
                  {...game}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
