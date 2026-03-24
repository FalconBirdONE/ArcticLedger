import { Link } from "react-router-dom";

export default function SidebarItem({ item, isActive, onClick, onMouseEnter }) {
  return (
    <Link
      to={item.path}
      className={`sidebar-item ${isActive ? "active" : ""}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {item.label}
    </Link>
  );
}