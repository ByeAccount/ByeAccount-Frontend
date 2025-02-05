import { Input } from "../components/forms/Input";

export function Home() {
  return (
    <div className="space-y-10">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">ByeAccount</h1>
        <p className="text-xl">Supprimez facilement vos comptes</p>
      </div>
      <div className="mx-auto max-w-xl">
        <Input
          type="text"
          placeholder="Rechercher un site"
          value=""
          onChange={() => {}}
        />
      </div>
    </div>
  );
}
