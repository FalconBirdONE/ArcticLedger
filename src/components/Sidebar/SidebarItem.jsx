import { NavLink } from "react-router-dom";

export default function SidebarItem({ item }) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        isActive ? "sidebar-item active" : "sidebar-item"
      }
    >
      <span className="sidebar-icon">{item.icon}</span>
      <span className="sidebar-label">{item.label}</span>
    </NavLink>
  );
}