import { IconToc } from "./IconToc";
import { IconCarret } from "./IconCarret";

export const Toc = () => {
  return (
    <details className="o-box c-content-l">
      <summary className="o-icon-parent o-icon-parent--full-wide o-icon-parent--toc u-txt-weight-m">
        <IconToc />
        目次
        <IconCarret />
      </summary>
      <ul className="c-disc-list c-disc-list--toc">
        <li><a href="#" className="c-text-link c-text-link--full-wide">見出し1</a></li>
        <li><a href="#" className="c-text-link c-text-link--full-wide">見出し2</a></li>
        <li><a href="#" className="c-text-link c-text-link--full-wide">見出し3</a></li>
      </ul>
    </details>
  );
};
