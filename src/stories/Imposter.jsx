import React from "react";
import "../styles/objects/_o-imposter.scss";
import "../styles/objects/_o-frame.scss";

export const Imposter = () => {
  return (
    <div className="o-imposter-parent">
      <picture className="o-frame">
        <source type="image/avif" srcSet="img/thumb.avif" />
        <source type="image/webp" srcSet="img/thumb.webp" />
        <img
          src="img/thumb.png"
          width="100%"
          height="100%"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          alt=""
        />
      </picture>
      <div className="o-imposter">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>
  );
};
