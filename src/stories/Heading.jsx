import React from "react";
import PropTypes from "prop-types";
import "../styles/components/_c-heading.scss";

export const Heading = ({ className }) => {
  return (
    <h1 className={className}>Heading</h1>
  );
};

Heading.propTypes = {
  /**
   * 見出しのレベル
   */
  className: PropTypes.oneOf(["c-heading", "c-sec-heading","c-ter-heading","c-qua-heading","c-qui-heading","c-sen-heading"]),
};

Heading.defaultProps = {
  className: "c-heading",
};
