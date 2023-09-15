import React from "react";
import PropTypes from "prop-types";
import "../styles/components/_c-text.scss";

export const TextLink = ({ modifier }) => {
  return (
    <a href="#" className={["c-text-link", `c-text-link--${modifier}`].join(" ")}>Link Text</a>
  );
};

TextLink.propTypes = {
  /**
   * 下線の有無、ターゲットの広さ
   */
  modifier: PropTypes.oneOf(["no-underline","full-wide"]),
};

TextLink.defaultProps = {
  modifier: null,
};
