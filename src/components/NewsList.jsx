import styles from "../styles/components/news-item.module.scss";

export const NewsList = () => {
  return (
    <ul className="o-stack o-stack--m">
      <li className="o-sidebar">
        <time className={styles.time}>2023.00.00</time>
        <a className={styles.link} href="#">
          a
        </a>
      </li>
      <li className="o-sidebar">
        <time className={styles.time}>2023.00.00</time>
        <a className={styles.link} href="#">
          b
        </a>
      </li>
      <li className="o-sidebar">
        <time className={styles.time}>2023.00.00</time>
        <a className={styles.link} href="#">
          c
        </a>
      </li>
      <li className="o-sidebar">
        <time className={styles.time}>2023.00.00</time>
        <a className={styles.link} href="#">
          d
        </a>
      </li>
      <li className="o-sidebar">
        <time className={styles.time}>2023.00.00</time>
        <a className={styles.link} href="#">
          e
        </a>
      </li>
    </ul>
  );
};
