import { Navbar } from "./partials/Navbar.tsx";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="space-y-6">
      <Navbar />

      <main className="p-2 sm:p-4">
        <Outlet />
      </main>
    </div>
  );
}
