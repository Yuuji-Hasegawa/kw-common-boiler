import { PageHeading } from "../PageHeading";
import { Date } from "../Date";
import { ShareUrl } from "../ShareUrl";
import { IconNext } from "../IconNext";

export const NewsSingle = () => {
  return (
    <article className="o-center o-center--content o-box o-box--entry">
        <PageHeading pageTitle='サンプルニュース' />
        <div className="o-stack o-stack--l">
          <Date date='2023.00.00' fontSize='m' />
          <div className="c-entry">
            <p>aaa</p>
            <p>aaa</p>
          </div>
          <h2 className="c-sec-heading">シェア・共有</h2>
          <ShareUrl />
          <h3 className="c-ter-heading">本件に関するお問い合わせ先</h3>
          <div className="c-content-l">
            電話:<a className="c-text-link" href="tel:000-0000-0000" target="_blank" rel="noopener">000-0000-0000</a><br />
            メール:<a className="c-text-link" href="mailto:info@examples.com" target="_blank" rel="noopener">info@examples.com</a><br />
            <a className="c-text-link" href="#">お問い合わせフォーム</a>
          </div>
          <div className="u-txt-center">
            <a href="#" className="o-box o-box--button o-box--rect-button o-icon-parent">
              お知らせ一覧
              <IconNext />
            </a>
          </div>
        </div>
      </article>
  );
};
