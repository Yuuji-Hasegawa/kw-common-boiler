import { PageHeading } from "../PageHeading";
import { AuthorBio } from "../AuthorBio";
import { Toc } from "../Toc";
import { Thumb } from "../Thumb";
import { BlogEmbed } from "../BlogEmbed";
import { CatLink } from "../CatLink";
import { TagLink } from "../TagLink";
import { AuthorColo } from "../AuthorColo";
import { RelatedList } from "../RelatedList";
import { LastList } from "../LastList";
import { PopularList } from "../PopularList";
import { ShareUrl } from "../ShareUrl";
import { IconNext } from "../IconNext";

export const BlogSingle = () => {
  return (
    <article className="o-center o-center--content o-box o-box--entry">
        <PageHeading pageTitle='サンプルブログ' />
        <div className="o-stack o-stack--l">
          <AuthorBio hasUpdate='true' />
          <p className="c-content-l">
            どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。天の川のなかでたった一つのちりのように高くはねあがり、どおとはげしい音がしてだまっていました。新世界交響楽はいよいよはっきり地平線のはてから、かすかなかすかな旋律が糸のように足をのばしていました。その人はもう行ってしまいました。
          </p>
          <Toc />
          <Thumb />
          <div className="c-entry">
            <h2>見出し1</h2>
            <p>どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。天の川のなかでたった一つのちりのように高くはねあがり、どおとはげしい音がしてだまっていました。新世界交響楽はいよいよはっきり地平線のはてから、かすかなかすかな旋律が糸のように足をのばしていました。その人はもう行ってしまいました。</p>
            <Thumb />
            <h3>小見出し1</h3>
            <p>どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。天の川のなかでたった一つのちりのように高くはねあがり、どおとはげしい音がしてだまっていました。新世界交響楽はいよいよはっきり地平線のはてから、かすかなかすかな旋律が糸のように足をのばしていました。その人はもう行ってしまいました。</p>
          </div>
          <h2 className="c-sec-heading">オススメ記事</h2>
          <p className="c-content-l">どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので</p>
          <BlogEmbed />
          <CatLink />
          <TagLink />
          <h2 className="c-sec-heading">シェア・共有</h2>
          <ShareUrl />
          <AuthorColo />
          <RelatedList />
          <LastList />
          <PopularList />
          <div className="u-txt-center">
            <a href="#" className="o-box o-box--button o-box--rect-button o-icon-parent">
              ブログ一覧
              <IconNext />
            </a>
          </div>
        </div>
      </article>
  );
};
