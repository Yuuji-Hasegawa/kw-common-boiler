import React from "react";
import "../styles/objects/_o-sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="o-sidebar">
      <div className="o-sidebar__narrow">Narrow Item</div>
      <div className="o-sidebar__wide">Wide Item</div>
    </div>
  );
};
