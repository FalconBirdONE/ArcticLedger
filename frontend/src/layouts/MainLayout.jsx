import { Outlet } from "react-router-dom";
import Sidebar from "../features/navigation/Sidebar";

export default function MainLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: "30px" }}>
        <Outlet />
      </main>
    </div>
  );
}