import TeamAccordion from "./TeamAccordion";
import { teamGroups } from "./constants";

export default function TeamSection() {
  return (
    <div className="max-w-7xl mx-auto space-y-32">
      {teamGroups.map((group) => (
        // <TeamAccordion key={group.group} members={group.members} />
        <div key={group.group} className="space-y-10">
          <h2 className="text-4xl font-semibold">{group.group}</h2>
          <TeamAccordion members={group.members} />
        </div>
      ))}
    </div>
  );
}
