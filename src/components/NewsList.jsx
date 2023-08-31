import styles from "../styles/components/news-item.module.scss";

export const NewsList = () => {
  return (
    <ul className="o-stack o-stack--m">
      <li className="o-sidebar">
        <time className="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
        <a className={["c-content-l c-text-link u-txt-weight-b", `${styles.link}`].join(" ")} href="#">
          Sample News01
        </a>
      </li>
      <li className="o-sidebar">
        <time className="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
        <a className={["c-content-l c-text-link u-txt-weight-b", `${styles.link}`].join(" ")} href="#">
        Sample News02
        </a>
      </li>
      <li className="o-sidebar">
        <time className="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
        <a className={["c-content-l c-text-link u-txt-weight-b", `${styles.link}`].join(" ")} href="#">
        Sample News03
        </a>
      </li>
      <li className="o-sidebar">
        <time className="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
        <a className={["c-content-l c-text-link u-txt-weight-b", `${styles.link}`].join(" ")} href="#">
        Sample News04
        </a>
      </li>
      <li className="o-sidebar">
        <time className="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
        <a className={["c-content-l c-text-link u-txt-weight-b", `${styles.link}`].join(" ")} href="#">
        Sample News05
        </a>
      </li>
    </ul>
  );
};
