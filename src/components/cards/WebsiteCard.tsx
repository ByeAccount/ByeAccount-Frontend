import { Website } from "../../types/Website.ts";

export function WebsiteCard({ website }: { website: Website }) {
  return (
    <div className="rounded-lg border border-gray-300 p-4">
      <p className="text-lg font-bold">{website.name}</p>
      <p>Etapes :</p>
      <ul>
        {website.steps.map((step) => (
          <li key={step.id} className="text-sm text-gray-500">
            {step.order}. {step.text}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-center space-x-2">
        <a
          href={website.deletion_url}
          className="mt-4 flex items-center rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white"
        >
          Supprimer mon compte
        </a>
        <a
          href={website.website_url}
          className="mt-4 flex items-center rounded-lg bg-blue-500 px-3 py-1 text-sm font-semibold text-white"
        >
          Voir le site
        </a>
      </div>
    </div>
  );
}
