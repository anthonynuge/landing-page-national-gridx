import TeamAccordion from "./TeamAccordion";
import { teamGroups } from "./constants";

export default function TeamSection() {
  return (
    <div className="max-w-7xl mx-auto space-y-32 mb-32">
      {teamGroups.map((group) => (
        <div key={group.group} className="space-y-10">
          <p className="ml-0 md:ml-24 text-lg text-gray-500 uppercase tracking-wide mb-1">
            {group.group}
          </p>
          <TeamAccordion members={group.members} />
        </div>
      ))}
    </div>
  );
}
