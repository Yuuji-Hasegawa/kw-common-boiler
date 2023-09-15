import { PageHeading } from "../PageHeading";
import { IconHome } from "../IconHome";

export const NotFound = () => {
  return (
    <>
      <PageHeading pageTitle='お探しのページは見つかりませんでした。' />
        <p className="c-content-l">大変申し訳ございませんが、お探しのページ(URL:#)は見つかりませんでした。<br />アドレスバーに直接URLを入力された場合は、アドレスが正しく入力されているか、もう一度ご確認下さい。</p>
        <p className="c-content-l">正しいアドレスを入力しても表示されない場合は、一時的にアクセスできない状況にあるか、移動もしくは削除された可能性があります。<br />その場合お手数ですがトップページからお求めのページを再度お探しください。</p>
        <a href="#" className="o-box o-box--button o-box--rect-button u-mt-l">
          <span className="o-icon-parent">
            <IconHome />
            トップページへ戻る
          </span>
        </a>
    </>
  );
};
