import { getTeamData } from "~/lib/espn";

export default async function Head({ params }: { params: { teamId: string } }) {
  const data = await getTeamData(params.teamId);

  const title = data?.name
    ? `${data.name} | NHL Scores & Schedules`
    : "NHL Scores & Schedules";

  return (
    <>
      <title>NHL Scores & Schedules</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Like ESPN, but streamlined." />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
