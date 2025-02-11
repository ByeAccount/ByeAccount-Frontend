import { SearchSection } from "../components/sections/SearchSection.tsx";

export function Home() {
  return (
    <div className="space-y-10">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">ByeAccount</h1>
        <p className="text-xl">Supprimez facilement vos comptes</p>
      </div>
      <SearchSection />
    </div>
  );
}
