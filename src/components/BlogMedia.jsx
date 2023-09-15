import { Thumb } from "./Thumb";
import { Date } from "./Date";
import { CatLabel } from "./CatLabel";
import { CardTitle } from "./CardTitle";

export const BlogMedia = () => {
  return (
    <a href="#" className="o-sidebar o-box o-box--bg-fill o-box--blog-card">
      <span className="o-sidebar__narrow">
        <Thumb modifier='square' />
      </span>
      <span className="o-sidebar__wide o-box o-box--card-inner o-stack o-stack--m">
        <span class="o-cluster o-cluster--middle">
          <Date date='2023.00.00' />
          <CatLabel categoryName='category' />
        </span>
        <CardTitle contentTitle='サンプルタイトル' modifier='one-line' />
        <span className="c-content-m u-text-trim u-text-trim--three-line">
          どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見える
        </span>
      </span>
    </a>
  );
};
