import React from "react";
import PropTypes from "prop-types";
import "../styles/objects/_o-stack.scss";

export const Stack = ({ modifier }) => {
  return (
    <div className={["o-stack", `o-stack--${modifier}`].join(" ")}>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
      <div>Child 4</div>
      <div>Child 5</div>
    </div>
  );
};

Stack.propTypes = {
  /**
   * 間隔の指定
   */
  modifier: PropTypes.oneOf(["3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"]),
};

Stack.defaultProps = {
  modifier: null,
};
