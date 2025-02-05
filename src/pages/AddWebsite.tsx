import { Input } from "../components/forms/Input";

export function AddWebsite() {
  return (
    <div className="space-y-10">
      <h1 className="text-center text-3xl font-semibold">Ajouter un site</h1>
      <div className="mx-auto max-w-xl space-y-2">
        <Input
          type="text"
          placeholder="Entrez le nom du site"
          value=""
          onChange={() => {}}
        />
        <Input
          type="text"
          placeholder="Entrez le nom du site"
          value=""
          onChange={() => {}}
        />
        <Input
          type="text"
          placeholder="Entrez le nom du site"
          value=""
          onChange={() => {}}
        />
      </div>
    </div>
  );
}
