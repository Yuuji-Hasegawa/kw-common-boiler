import React from "react";
import PropTypes from "prop-types";
import "../styles/objects/_o-center.scss";

export const Center = ({ modifier }) => {
  return (
    <div className={["o-center", `o-center--${modifier}`].join(" ")}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
  );
};

Center.propTypes = {
  /**
   * 最大幅
   */
  modifier: PropTypes.oneOf(["content"]),
};

Center.defaultProps = {
  modifier: null,
};
