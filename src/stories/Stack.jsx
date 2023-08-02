import React from "react";
import PropTypes from "prop-types";
import "../styles/objects/_o-stack.scss";

/**
 * 縦積みする要素の基本オブジェクト<br />
 * .o-stack + .o-stack--modifier で隙間を調整して使う
 */

export const Stack = ({ size }) => {
  return (
    <div className={["o-stack", `o-stack--${size}`].join(" ")}>
      <div>Child 1</div>
      <div>Child 2</div>
    </div>
  );
};

Stack.propTypes = {
  /**
   * 縦積みにした時の隙間。<br />
   * styles/settings/_sizes.scss 内の $spaces と連動。
   */
  size: PropTypes.oneOf(["ssss","sss","ss","s","n","m","l","ll","lll"]),
};

Stack.defaultProps = {
  size: "n",
};
