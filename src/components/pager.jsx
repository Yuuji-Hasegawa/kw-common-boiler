import styles from "../styles/components/pager-btn.module.scss";

export const Pager = () => {
  return (
    <nav className="u-max-item u-block-center" aria-label="Pagination">
      <ol className="o-cluster o-cluster--pager">
        <li>
          <a href="#" className={styles.btn} aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path
                d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" className={styles.btn} aria-label="Goto Page 1">
            {" "}
            1{" "}
          </a>
        </li>
        <li>
          <a href="#" className={styles.btn} aria-label="Goto Page 1">
            {" "}
            2{" "}
          </a>
        </li>
        <li>
          <a href="#" className={styles.btn} aria-label="Current Page" aria-current="true">
            {" "}
            3{" "}
          </a>
        </li>
        <li>
          <a href="#" className={styles.btn} aria-label="Goto Page 1">
            {" "}
            4{" "}
          </a>
        </li>
        <li>
          <a href="#" className={styles.btn} aria-label="Goto Page 1">
            {" "}
            5{" "}
          </a>
        </li>
        <li>
          <a href="#" className={styles.btn} aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path
                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </li>
      </ol>
    </nav>
  );
};
