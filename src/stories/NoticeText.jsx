import React from "react";
import "../styles/generic/_resets.scss";
import "../styles/components/_c-text.scss";
import "../styles/objects/_o-stack.scss";

export const NoticeText = () => {
  return (
    <>
      <div className="c-notes">注釈</div>
      <ul className="o-stack">
        <li className="c-notes">注釈</li>
        <li className="c-notes">注釈</li>
      </ul>
    </>
  );
};
