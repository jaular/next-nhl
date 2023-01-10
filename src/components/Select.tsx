"use client";

import { z } from "zod";
import { useRouter } from "next/navigation";
import { Team } from "~/schemas/teams";

export default function Select({
  allTeams,
  teamId,
}: {
  allTeams: z.infer<typeof Team>[];
  teamId: string;
}) {
  const router = useRouter();

  function changeTeam(event: React.ChangeEvent<HTMLSelectElement>) {
    const teamId = event.target.value;
    router.push(`/${teamId}`);
  }

  return (
    <div className="border border-gray-700">
      <select
        className="w-full px-2 py-2 text-sm font-semibold text-gray-300 bg-black border-r-8 border-transparent md:text-base focus:outline-none"
        defaultValue={teamId}
        onChange={changeTeam}
      >
        {/* <optgroup label="Big 12"> */}
        {/* Could be nice, if I had that data here */}
        {allTeams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.displayName}
          </option>
        ))}
      </select>
    </div>
  );
}
