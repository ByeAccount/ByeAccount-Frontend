import { WebsiteCard } from "../cards/WebsiteCard.tsx";
import { Website } from "../../types/Website.ts";

export function WebsiteList({ websites }: { websites: Website[] }) {
  return (
    <div className="space-y-2">
      {websites.map((website: Website) => (
        <WebsiteCard key={website.id} website={website} />
      ))}
    </div>
  );
}
