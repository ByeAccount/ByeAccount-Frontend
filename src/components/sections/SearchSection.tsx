import { SearchBar } from "../forms/SearchBar.tsx";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWebsites } from "../../api/companyApi.ts";
import { WebsiteList } from "../groups/WebsiteList.tsx";

export function SearchSection() {
  const [query, setQuery] = useState("");
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["websites"],
    queryFn: () => fetchWebsites(query),
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      refetch();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query, refetch]);

  const websites = data || [];

  return (
    <div className="mx-auto max-w-xl space-y-10">
      <SearchBar
        placeholder="Rechercher un site"
        value={query}
        onChange={setQuery}
      />
      {isLoading && <p>Chargement...</p>}
      <WebsiteList websites={websites} />
    </div>
  );
}
