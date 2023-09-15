import React from "react";
import PropTypes from "prop-types";
import "../styles/components/_c-text.scss";

export const LabelText = ({ size }) => {
  return (
    <span className={`c-label-${size}`}>Label</span>
  );
};

LabelText.propTypes = {
  /**
   * 大きさのレベル
   */
  size: PropTypes.oneOf(["l","m"]),
};

LabelText.defaultProps = {
  size: "l",
};
