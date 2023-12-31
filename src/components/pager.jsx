import styles from "../styles/components/pager-btn.module.scss";
import { IconPrev } from "./IconPrev";
import { IconNext } from "./IconNext";

export const Pager = () => {
  return (
      <ol className={["o-cluster o-cluster--center", `${styles.pager}`].join(" ")}>
        <li>
          <a href="#" className="o-box o-box--button o-box--square-button" aria-label="Previous">
            <IconPrev />
          </a>
        </li>
        <li>
          <a href="#" className="o-box o-box--button o-box--square-button c-number-text-variant" aria-label="Goto Page 1">
            1
          </a>
        </li>
        <li>
          <a href="#" className="o-box o-box--button o-box--square-button c-number-text-variant" aria-label="Goto Page 1">
            2
          </a>
        </li>
        <li>
          <a href="#" className="o-box o-box--button o-box--square-button c-number-text-variant" aria-label="Current Page" aria-current="true">
            3
          </a>
        </li>
        <li>
          <a href="#" className="o-box o-box--button o-box--square-button c-number-text-variant" aria-label="Goto Page 1">
            4
          </a>
        </li>
        <li>
          <a href="#" className="o-box o-box--button o-box--square-button c-number-text-variant" aria-label="Goto Page 1">
            5
          </a>
        </li>
        <li>
          <a href="#" className="o-box o-box--button o-box--square-button" aria-label="Next">
            <IconNext />
          </a>
        </li>
      </ol>
  );
};
