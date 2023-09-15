import React from "react";
import PropTypes from "prop-types";
import "../styles/objects/_o-box.scss";
import "../styles/generic/_resets.scss";
import "../styles/objects/_o-stack.scss";
import "../styles/objects/_o-icon.scss";
import { IconHome } from "../components/IconHome.jsx";
import { IconNext } from "../components/IconNext.jsx";

export const RectButton = ({ modifier }) => {
  return (
    <div className="o-stack o-stack--m">
      <button type="submit" className={["o-box o-box--button o-box--rect-button", `o-box--${modifier}`].join(" ")}>テキスト</button>
      <a href="#" className={["o-box o-box--button o-box--rect-button", `o-box--${modifier}`].join(" ")}>
        <span className="o-icon-parent">
          <IconHome />
          トップページへ戻る
        </span>
      </a>
      <a href="#" className={["o-box o-box--button o-box--rect-button o-icon-parent", `o-box--${modifier}`].join(" ")}>
        お知らせ一覧
        <IconNext />
      </a>
      <button type="submit" className={["o-box o-box--button o-box--rect-button", `o-box--${modifier}`].join(" ")} disabled>テキスト</button>
    </div>
  );
};

RectButton.propTypes = {
  /**
   * ボタンの種別
   */
  modifier: PropTypes.oneOf(["primary-button","danger-button","ghost-button"]),
};

RectButton.defaultProps = {
  modifier: null,
};
