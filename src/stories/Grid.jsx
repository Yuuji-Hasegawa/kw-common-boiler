import React from "react";
import PropTypes from "prop-types";
import "../styles/objects/_o-grid.scss";

export const Grid = ({ modifier }) => {
  return (
    <div className={["o-grid", `o-grid--${modifier}`].join(" ")}>
      <div>Child 01</div>
      <div>Child 02</div>
      <div>Child 03</div>
      <div>Child 04</div>
      <div>Child 05</div>
      <div>Child 06</div>
      <div>Child 07</div>
      <div>Child 08</div>
      <div>Child 09</div>
      <div>Child 10</div>
      <div>Child 11</div>
      <div>Child 12</div>
    </div>
  );
};

Grid.propTypes = {
  /**
   * 横並びの個数
   */
  modifier: PropTypes.oneOf(["tri", "quart"]),
};

Grid.defaultProps = {
  modifier: null,
};
