import React from "react";
import PropTypes from "prop-types";
import "../styles/generic/_resets.scss";
import "../styles/components/_c-list.scss";

export const CountList = ({ modifier }) => {
  return (
    <ol className={["c-count-list", `c-count-list--${modifier}`].join(" ")}>
      <li>Child 01</li>
      <li>Child 02</li>
      <li>Child 03</li>
      <li>Child 04</li>
      <li>Child 05</li>
      <li>Child 06</li>
      <li>Child 07</li>
      <li>Child 08</li>
      <li>Child 09</li>
      <li>Child 10</li>
      <li>Child 11</li>
      <li>Child 12</li>
    </ol>
  );
};

CountList.propTypes = {
  /**
   * パターン別
   */
  modifier: PropTypes.oneOf(["secondary"]),
};

CountList.defaultProps = {
  modifier: null,
};
