import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../features/navigation/Sidebar";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main
        key={location.pathname}
        className="fade"
        style={{ flex: 1, padding: "30px" }}
      >
        <Outlet />
      </main>
    </div>
  );
}