import { PageHeading } from "../PageHeading";

export const Company = () => {
  return (
    <>
      <PageHeading pageTitle='会社概要' />
        <dl className="o-sidebar o-sidebar--table">
          <dt className="o-box o-box--thead c-content-l">
            会社名
          </dt>
          <dd className="o-box o-box--tbody c-content-l">
            xx株式会社
          </dd>
          <dt className="o-box o-box--thead c-content-l">
            代表者
          </dt>
          <dd className="o-box o-box--tbody c-content-l">
            代表取締役 xx
          </dd>
          <dt className="o-box o-box--thead c-content-l">
            所在地
          </dt>
          <dd className="o-box o-box--tbody c-content-l">
            〒530-0011 大阪市北区大深町3-1
          </dd>
          <dt className="o-box o-box--thead c-content-l">
            設立
          </dt>
          <dd className="o-box o-box--tbody c-content-l">
            2023年00月00日
          </dd>
          <dt className="o-box o-box--thead c-content-l">
            メールアドレス
          </dt>
          <dd className="o-box o-box--tbody c-content-l">
            <a className="c-text-link" href="mailto:info@examples.com" target="_blank" rel="noopener">info@examples.com</a>
          </dd>
        <dt className="o-box o-box--thead c-content-l">
          事業内容
        </dt>
        <dd className="o-box o-box--tbody c-content-l">
          <ul className="c-disc-list">
            <li>業務1</li>
            <li>業務2</li>
            <li>業務3</li>
            <li>業務4</li>
            <li>その他、上記に係る業務</li>
          </ul>
        </dd>
      </dl>
    </>
  );
};
