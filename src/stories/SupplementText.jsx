import React from "react";
import PropTypes from "prop-types";
import "../styles/components/_c-text.scss";

export const SupplementText = ({ size }) => {
  return (
    <div className={`c-suppl-${size}`}>なんだかあたりまえのような、がらんとしたんだ。お前は夢の中でとまってそれをしらべてみましたら、そのいままでカムパネルラのすわっていたのでした。わたしたちはこんないいとこを旅して、そっちを見あげてくつくつ笑いました。そのときにわかに大きな音がしました。そしてきゅうくつな上着の肩を気にしながら、それを二つにちぎってわたしました。</div>
  );
};

SupplementText.propTypes = {
  /**
   * 大きさのレベル
   */
  size: PropTypes.oneOf(["l","m"]),
};

SupplementText.defaultProps = {
  size: "l",
};
