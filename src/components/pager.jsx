import styles from "../styles/components/pager-btn.module.scss";

export const Pager = () => {
  return (
    <nav className="u-max-item u-block-center u-mt-m u-mb-m" aria-label="Pagination">
      <ol className={["o-cluster o-cluster--center", `${styles.pager}`].join(" ")}>
        <li>
          <a href="#" className={styles.btn} aria-label="Previous">
            <svg
              className="o-icon"
              width="54"
              height="96"
              viewBox="0 0 54 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0898438 47.9805C0.0898438 47.3555 0.207031 46.7695 0.441406 46.2227C0.675781 45.6758 1.04688 45.168 1.55469 44.6992L45.6172 2.04297C46.4766 1.14453 47.5508 0.695312 48.8398 0.695312C49.6992 0.695312 50.4609 0.890625 51.125 1.28125C51.8281 1.67188 52.375 2.21875 52.7656 2.92188C53.1953 3.58594 53.4102 4.36719 53.4102 5.26562C53.4102 6.47656 52.9805 7.55078 52.1211 8.48828L11.2227 47.9805L52.1211 87.5312C52.9805 88.4297 53.4102 89.5039 53.4102 90.7539C53.4102 91.6133 53.1953 92.3945 52.7656 93.0977C52.375 93.8008 51.8281 94.3281 51.125 94.6797C50.4609 95.0703 49.6992 95.2656 48.8398 95.2656C47.5508 95.2656 46.4766 94.8359 45.6172 93.9766L1.55469 51.3203C1.04688 50.8516 0.675781 50.3438 0.441406 49.7969C0.207031 49.25 0.0898438 48.6445 0.0898438 47.9805Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" className={styles.btn} aria-label="Goto Page 1">
            1
          </a>
        </li>
        <li>
          <a href="#" className={styles.btn} aria-label="Goto Page 1">
            2
          </a>
        </li>
        <li>
          <a href="#" className={styles.btn} aria-label="Current Page" aria-current="true">
            3
          </a>
        </li>
        <li>
          <a href="#" className={styles.btn} aria-label="Goto Page 1">
            4
          </a>
        </li>
        <li>
          <a href="#" className={styles.btn} aria-label="Goto Page 1">
            5
          </a>
        </li>
        <li>
          <a href="#" className={styles.btn} aria-label="Next">
            <svg width="54" height="96" viewBox="0 0 54 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M53.3203 47.9805C53.3203 48.6055 53.2031 49.1914 52.9688 49.7383C52.7344 50.2852 52.3633 50.793 51.8555 51.2617L7.79297 93.918C6.93359 94.8164 5.85938 95.2656 4.57031 95.2656C3.71094 95.2656 2.94922 95.0703 2.28516 94.6797C1.58203 94.2891 1.03516 93.7422 0.644531 93.0391C0.214844 92.375 3.21006e-07 91.5937 3.99549e-07 90.6953C5.05413e-07 89.4844 0.429688 88.4102 1.28906 87.4727L42.1875 47.9805L1.28907 8.42968C0.429695 7.53125 7.76389e-06 6.45703 7.87317e-06 5.20703C7.9483e-06 4.34765 0.214852 3.5664 0.644539 2.86328C1.03516 2.16015 1.58204 1.63281 2.28516 1.28125C2.94923 0.890621 3.71095 0.695308 4.57032 0.695308C5.85938 0.695308 6.9336 1.125 7.79298 1.98437L51.8555 44.6406C52.3633 45.1094 52.7344 45.6172 52.9688 46.1641C53.2031 46.7109 53.3203 47.3164 53.3203 47.9805Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </li>
      </ol>
    </nav>
  );
};
