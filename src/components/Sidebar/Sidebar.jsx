import SidebarItem from "./SidebarItem";
import { sidebarItems } from "./sidebarConfig";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        MyApp
      </div>

      <nav className="sidebar-nav">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </nav>
    </aside>
  );
}