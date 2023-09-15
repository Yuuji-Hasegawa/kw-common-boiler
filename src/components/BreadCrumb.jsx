import { IconHome } from "./IconHome";

export const BreadCrumb = () => {
  return (
    <ol className="o-reel o-reel--breadcrumb">
      <li className="c-breadcrumb-item">
        <a href="#" className="o-icon-parent c-text-link c-text-link--no-underline c-content-l">
          <IconHome />
          ホーム
        </a>
      </li>
      <li className="c-breadcrumb-item">
        <a href="#" className="c-text-link c-text-link--no-underline c-content-l">
          ブログ一覧
        </a>
      </li>
      <li className="c-breadcrumb-item">
        <a href="#" className="c-text-link c-text-link--no-underline c-content-l">
          サンプルブログ
        </a>
      </li>
    </ol>
  );
};
