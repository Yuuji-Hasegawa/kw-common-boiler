import { AuthorImg } from "./AuthorImg";
import { AuthorSns } from "./AuthorSns";

export const AuthorColo = () => {
  return (
    <div className="o-sidebar">
      <div className="o-sidebar__author-pict u-block-center">
        <AuthorImg />
      </div>
      <div className="o-sidebar__author-data o-stack o-stack--s">
        <dl className="o-stack o-stack--s">
          <dt className="c-author-name u-block-center c-display-xs u-txt-weight-b u-txt-brand">XX XX</dt>
          <dd className="c-content-m">
            どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。天の川のなかでたった一つのちりのように高くはねあがり、どおとはげしい音がしてだまっていました。新世界交響楽はいよいよはっきり地平線のはてから、かすかなかすかな旋律が糸のように足をのばしていました。その人はもう行ってしまいました。
          </dd>
        </dl>
        <AuthorSns />
      </div>
    </div>
  );
};
