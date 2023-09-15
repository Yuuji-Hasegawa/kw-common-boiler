import React from "react";
import PropTypes from "prop-types";
import "../styles/components/_c-text.scss";
import "../styles/objects/_o-box.scss";
import "../styles/generic/_resets.scss";

export const Textarea = ({ modifier }) => {
  return (
    <textarea name="your-message" className={["o-box o-box--input c-content-l", `o-box--${modifier}`].join(" ")} cols="30" rows="10" placeholder="プレースホルダーテキスト"></textarea>
  );
};

Textarea.propTypes = {
  /**
   * 横幅
   */
  modifier: PropTypes.oneOf(["full-wide"]),
};

Textarea.defaultProps = {
  modifier: null,
};
