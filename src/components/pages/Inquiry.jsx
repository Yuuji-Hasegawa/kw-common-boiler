import { PageHeading } from "../PageHeading";

export const Inquiry = () => {
  return (
    <>
      <PageHeading pageTitle='お問い合わせ' />
        <p className="c-content-l">必要な情報を入力して、「送信する」ボタンを押してください。 </p>
        <form action="#">
          <dl className="o-sidebar o-sidebar--table">
            <dt className="o-box o-box--thead c-content-l">
              お名前
            </dt>
            <dd className="o-box o-box--tbody c-content-l">
              <input type="text" className="o-box o-box--input o-box--full-wide c-content-l" placeholder="例)お名前" />
            </dd>
            <dt className="o-box o-box--thead c-content-l">
              性別
            </dt>
            <dd className="o-box o-box--tbody c-content-l">
              <div className="o-cluster">
                <label className="o-icon-parent o-icon-parent--center o-icon-parent--form-item">
                  <input name="gender" className="o-box o-box--radio" type="radio" />男
                </label>
                <label className="o-icon-parent o-icon-parent--center o-icon-parent--form-item">
                  <input name="gender" className="o-box o-box--radio" type="radio" />女
                </label>
              </div>
            </dd>
            <dt className="o-box o-box--thead c-content-l">
              連絡方法
            </dt>
            <dd className="o-box o-box--tbody c-content-l">
              <div className="o-cluster">
                <label className="o-icon-parent o-icon-parent--center o-icon-parent--form-item">
                  <input className="o-box o-box--checkbox" type="checkbox" />電話
                </label>
                <label className="o-icon-parent o-icon-parent--center o-icon-parent--form-item">
                  <input className="o-box o-box--checkbox" type="checkbox" />メール
                </label>
              </div>
            </dd>
            <dt className="o-box o-box--thead c-content-l">
              <span className="o-icon-parent o-icon-parent--full-wide">
                メールアドレス
                <span className="o-icon o-icon--required">必須</span>
              </span>
            </dt>
            <dd className="o-box o-box--tbody c-content-l">
              <input type="mail" className="o-box o-box--input o-box--full-wide c-content-l" placeholder="例)info@examples.com" />
            </dd>
            <dt className="o-box o-box--thead c-content-l">
              お問い合わせ内容
            </dt>
            <dd className="o-box o-box--tbody c-content-l">
              <textarea name="your-message" className="o-box o-box--input o-box--full-wide c-content-l" cols="30" rows="10" placeholder="お気軽にご入力ください"></textarea>
            </dd>
          </dl>
          <label className="o-icon-parent o-icon-parent--full-wide o-icon-parent--center o-icon-parent--form-item u-mt-m u-mb-m">
            <input className="o-box o-box--checkbox" type="checkbox" /><a className="c-text-link" href="#">プライバシーポリシー</a>に同意する
          </label>
          <button type="submit" className="o-box o-box--button o-box--primary-button o-box--rect-button">送信する</button>
        </form>
        <ul className="o-stack o-stack--xs u-mt-m u-mb-m">
          <li className="c-notes">調査等のため、返信にお時間を頂くことがございます。予めご了承ください。</li>
          <li className="c-notes">
            万が一、一週間経っても返信がない場合は大変お手数ですが、<a className="c-text-link" href="mailto:info@examples.com" target="_blank" rel="noopener">info@examples.com</a>までご連絡ください。
          </li>
        </ul>
    </>
  );
};
