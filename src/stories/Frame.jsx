import React from "react";
import PropTypes from "prop-types";
import "../styles/objects/_o-frame.scss";

export const Frame = ({ modifier }) => {
  return (
    <picture className={["o-frame", `o-frame--${modifier}`].join(" ")}>
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
  );
};

Frame.propTypes = {
  /**
   * アスペクト比、変形、グレースケール
   */
  modifier: PropTypes.oneOf(["round", "square", "landscape", "standard", "portrait", "upright", "skyscraper", "switch-s", "switch-m", "switch-l", "no-color"]),
};

Frame.defaultProps = {
  modifier: null,
};
