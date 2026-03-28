import SidebarItem from "./SidebarItem";
import { sidebarItems } from "./sidebarConfig";
import "./sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ITEM_HEIGHT = 52;

  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">ArcticLedger</div>
      <nav className="sidebar-nav">
        <div
          className="sidebar-indicator"
          style={{ transform: `translateY(${activeIndex * ITEM_HEIGHT}px)` }}
        />

        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={item.path}
            item={item}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </nav>
    </aside>
  );
}