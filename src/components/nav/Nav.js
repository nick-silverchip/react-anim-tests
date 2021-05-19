import React from "react";
import DelayedRender from "../delayedRender/DelayedRender";

const navItems = [
  { label: "Status", path: "/status" },
  { label: "Modules", path: "/modules" },
  { label: "Fire Groups", path: "/fire-groups" },
  { label: "Cargo", path: "/cargo" },
  { label: "Functions", path: "/functions" },
];

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        {navItems.map((item, i) => (
          <DelayedRender key={i} index={i + 1} customClass="delayed">
            <li
              className={`nav-item ${item.label === "Status" ? "active" : ""}`}
            >
              {item.label}
            </li>
          </DelayedRender>
        ))}
      </ul>
    </nav>
  );
}
