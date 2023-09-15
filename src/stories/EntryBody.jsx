import React from "react";
import "../styles/objects/_o-box.scss";
import "../styles/objects/_o-center.scss";
import "../styles/components/_c-heading.scss";

export const EntryBody = () => {
  return (
    <article className="o-center o-center--content o-box o-box--entry">
      <h1 className="c-heading">記事タイトル</h1>
    </article>
  );
};
