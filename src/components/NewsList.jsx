import styles from "../styles/components/news-item.module.scss";

export const NewsList = () => {
  return (
    <ul className="o-stack o-stack--m">
      <li className="o-switcher">
        <time className="u-font-en u-txt-weight-b">2023.00.00</time>
        <a className={["u-txt-weight-b", `${styles.link}`].join(" ")} href="#">
          a
        </a>
      </li>
      <li className="o-switcher">
        <time className="u-font-en u-txt-weight-b">2023.00.00</time>
        <a className={["u-txt-weight-b", `${styles.link}`].join(" ")} href="#">
          b
        </a>
      </li>
      <li className="o-switcher">
        <time className="u-font-en u-txt-weight-b">2023.00.00</time>
        <a className={["u-txt-weight-b", `${styles.link}`].join(" ")} href="#">
          c
        </a>
      </li>
      <li className="o-switcher">
        <time className="u-font-en u-txt-weight-b">2023.00.00</time>
        <a className={["u-txt-weight-b", `${styles.link}`].join(" ")} href="#">
          d
        </a>
      </li>
      <li className="o-switcher">
        <time className="u-font-en u-txt-weight-b">2023.00.00</time>
        <a className={["u-txt-weight-b", `${styles.link}`].join(" ")} href="#">
          e
        </a>
      </li>
    </ul>
  );
};
