import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./layouts/AppLayout.tsx";
import { AddWebsite } from "./pages/AddWebsite.tsx";

const root = document.getElementById("root")!;

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="add-website" element={<AddWebsite />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
