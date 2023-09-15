import React from "react";
import PropTypes from "prop-types";
import "../styles/components/_c-text.scss";
import "../styles/objects/_o-box.scss";
import "../styles/generic/_resets.scss";

export const InputText = ({ modifier }) => {
  return (
    <input type="text" className={["o-box o-box--input c-content-l", `o-box--${modifier}`].join(" ")} placeholder="例)テキスト" />
  );
};

InputText.propTypes = {
  /**
   * 横幅
   */
  modifier: PropTypes.oneOf(["full-wide"]),
};

InputText.defaultProps = {
  modifier: null,
};
