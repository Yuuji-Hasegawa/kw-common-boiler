import React from "react";
import PropTypes from "prop-types";
import "../styles/components/_c-text.scss";

export const ContentText = ({ size }) => {
  return (
    <p className={`c-content-${size}`}>なんだかあたりまえのような、がらんとしたんだ。お前は夢の中でとまってそれをしらべてみましたら、そのいままでカムパネルラのすわっていたのでした。わたしたちはこんないいとこを旅して、そっちを見あげてくつくつ笑いました。そのときにわかに大きな音がしました。そしてきゅうくつな上着の肩を気にしながら、それを二つにちぎってわたしました。</p>
  );
};

ContentText.propTypes = {
  /**
   * 大きさのレベル
   */
  size: PropTypes.oneOf(["l","m"]),
};

ContentText.defaultProps = {
  size: "l",
};
