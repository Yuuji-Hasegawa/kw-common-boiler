import React from "react";
import PropTypes from "prop-types";
import "../styles/objects/_o-cluster.scss";

export const Cluster = ({ modifier }) => {
  return (
    <div className={["o-cluster", `o-cluster--${modifier}`].join(" ")}>
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
      <div>Child 4</div>
      <div>Child 5</div>
    </div>
  );
};

Cluster.propTypes = {
  /**
   * 子要素の配置
   */
  modifier: PropTypes.oneOf(["center", "middle"]),
};

Cluster.defaultProps = {
  modifier: null,
};
