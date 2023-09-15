import { AuthorBio } from "./AuthorBio";
import { Thumb } from "./Thumb";

export const BlogEmbed = () => {
  return (
    <a href="#" className="o-box o-box--blog-embed o-stack o-stack--m">
      <div className="o-sidebar">
        <div className="o-sidebar__narrow">
          <Thumb />
        </div>
        <div className="o-sidebar__wide o-stack o-stack--s">
          <h3 className="c-display-xs u-txt-weight-m u-text-trim">サンプル記事</h3>
          <span className="c-suppl-l u-txt-dimmed u-text-trim u-text-trim--three-line">どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、</span>
        </div>
      </div>
      <AuthorBio />
    </a>
  );
};
