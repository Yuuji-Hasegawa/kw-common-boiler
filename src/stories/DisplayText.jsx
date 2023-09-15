import React from "react";
import PropTypes from "prop-types";
import "../styles/components/_c-heading.scss";

export const DisplayText = ({ size }) => {
  return (
    <div className={`c-display-${size}`}>Display Text</div>
  );
};

DisplayText.propTypes = {
  /**
   * 大きさのレベル
   */
  size: PropTypes.oneOf(["2xl", "xl","l","m","s","xs","2xs"]),
};

DisplayText.defaultProps = {
  size: null,
};
