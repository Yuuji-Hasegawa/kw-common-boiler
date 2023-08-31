import { useState } from "react";
import "./styles/style.scss";
import { Pager } from "./components/pager.jsx";
import { NewsList } from "./components/NewsList.jsx";
import { Switch } from "./components/Switch.jsx";
import { IconHome } from "./components/IconHome.jsx";
import { IconExternal } from "./components/IconExternal.jsx";
import { IconClone } from "./components/IconClone.jsx";
import { IconNext } from "./components/IconNext.jsx";
import { IconCal } from "./components/IconCal.jsx";
import { IconRotate } from "./components/IconRotate.jsx";
import { IconToc } from "./components/IconToc.jsx";
import { IconCarret } from "./components/IconCarret.jsx";
import { IconCategory } from "./components/IconCategory.jsx";
import { IconFacebook } from "./components/IconFacebook.jsx";
import { IconTwitter } from "./components/IconTwitter.jsx";
import { IconX } from "./components/IconX.jsx";
import { IconInstagram } from "./components/IconInstagram.jsx";
import { IconYoutube } from "./components/IconYoutube.jsx";
import { IconLinkedin } from "./components/IconLinkedin.jsx";
import { IconLink } from "./components/IconLink.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="o-stack o-stack--m">
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
      </div>
      <Pager />
      <div className="o-center">
        <dl className="o-sidebar o-sidebar--table">
          <dt className="o-box o-box--thead c-content-l">
            会社名
          </dt>
          <dd className="o-box o-box--tbody c-content-l">
            xx株式会社
          </dd>
          <dt className="o-box o-box--thead c-content-l">
            所在地
          </dt>
          <dd className="o-box o-box--tbody c-content-l">
            〒530-0011 大阪市北区大深町3-1
          </dd>
          <dt className="o-box o-box--thead c-content-l">
            お名前
          </dt>
          <dd className="o-box o-box--tbody">
            <input type="text" className="o-box o-box--input o-box--full-wide c-content-l" placeholder="例)お名前" />
          </dd>
          <dt className="o-box o-box--thead c-content-l">
            <span className="o-icon-parent o-icon-parent--full-wide">
              性別
              <span className="o-icon o-icon--required">必須</span>
            </span>
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
            <div className="o-cluster">
              <label className="o-icon-parent o-icon-parent--center o-icon-parent--form-item">
                <input className="o-box o-box--checkbox" type="checkbox" />男
              </label>
              <label className="o-icon-parent o-icon-parent--center o-icon-parent--form-item">
                <input className="o-box o-box--checkbox" type="checkbox" />女
              </label>
            </div>
          </dd>
        </dl>
        <label className="o-icon-parent o-icon-parent--full-wide o-icon-parent--center o-icon-parent--form-item u-mt-m u-mb-m">
          <input className="o-box o-box--checkbox" type="checkbox" /><a className="c-text-link" href="#">プライバシーポリシー</a>に同意する
        </label>
        <button type="submit" className="o-box o-box--button o-box--primary-button o-box--rect-button">送信する</button>
        <button type="submit" className="o-box o-box--button o-box--danger-button o-box--rect-button">送信する</button>
        <button type="submit" className="o-box o-box--button o-box--primary-button o-box--rect-button" disabled>送信する</button>
        <ul className="o-stack o-stack--xs u-mt-m u-mb-m">
          <li className="c-notes">調査等のため、返信にお時間を頂くことがございます。予めご了承ください。</li>
          <li className="c-notes">
            万が一、一週間経っても返信がない場合は大変お手数ですが、<a className="c-text-link" href="mailto:info@examples.com" target="_blank" rel="noopener">info@examples.com</a>までご連絡ください。
          </li>
        </ul>
      </div>
      <div className="o-center">
        <h1 className="c-heading">お探しのページは見つかりませんでした。</h1>
        <p className="c-content-l">大変申し訳ございませんが、お探しのページ(URL:#)は見つかりませんでした。<br />アドレスバーに直接URLを入力された場合は、アドレスが正しく入力されているか、もう一度ご確認下さい。</p>
        <p className="c-content-l">正しいアドレスを入力しても表示されない場合は、一時的にアクセスできない状況にあるか、移動もしくは削除された可能性があります。<br />その場合お手数ですがトップページからお求めのページを再度お探しください。</p>
        <a href="#" className="o-box o-box--button o-box--rect-button u-mt-l">
          <span className="o-icon-parent">
            <IconHome />
            トップページへ戻る
          </span>
        </a>
      </div>
      <nav className="o-center u-mt-xl u-mb-xl">
        <ol className="o-reel o-reel--breadcrumb">
          <li className="c-breadcrumb-item">
            <a href="#" className="o-icon-parent c-text-link c-text-link--no-underline c-content-l">
              <IconHome />
              ホーム
            </a>
          </li>
          <li className="c-breadcrumb-item">
            <a href="#" className="c-text-link c-text-link--no-underline c-content-l">
              Not Found
            </a>
          </li>
        </ol>
      </nav>
      <div className="o-center">
        <h1 className="c-heading">お知らせ一覧</h1>
        <NewsList />
      </div>
      <Pager />
      <nav className="o-center u-mt-xl u-mb-xl">
        <ol className="o-reel o-reel--breadcrumb">
          <li className="c-breadcrumb-item">
            <a href="#" className="o-icon-parent c-text-link c-text-link--no-underline c-content-l">
              <IconHome />
              ホーム
            </a>
          </li>
          <li className="c-breadcrumb-item">
            <a href="#" className="c-text-link c-text-link--no-underline c-content-l">
              お知らせ
            </a>
          </li>
        </ol>
      </nav>
      <div className="o-center">
        <h1 className="c-heading">会社概要</h1>
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
      </div>
      <nav className="o-center u-mt-xl u-mb-xl">
        <ol className="o-reel o-reel--breadcrumb">
          <li className="c-breadcrumb-item">
            <a href="#" className="o-icon-parent c-text-link c-text-link--no-underline c-content-l">
              <IconHome />
              ホーム
            </a>
          </li>
          <li className="c-breadcrumb-item">
            <a href="#" className="c-text-link c-text-link--no-underline c-content-l">
              会社概要
            </a>
          </li>
        </ol>
      </nav>
      <div className="o-center">
        <h1 className="c-heading">お問い合わせ</h1>
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
      </div>
      <nav className="o-center u-mt-xl u-mb-xl">
        <ol className="o-reel o-reel--breadcrumb">
          <li className="c-breadcrumb-item">
            <a href="#" className="o-icon-parent c-text-link c-text-link--no-underline c-content-l">
              <IconHome />
              ホーム
            </a>
          </li>
          <li className="c-breadcrumb-item">
            <a href="#" className="c-text-link c-text-link--no-underline c-content-l">
              お問い合わせ
            </a>
          </li>
        </ol>
      </nav>
      <div className="o-center">
        <h1 className="c-heading">サイト規約</h1>
        <p className="c-content-l">本サイト規約（以下「本規約」と言います。）には、本サイトの利用条件及び当社とユーザーの皆様との間の権利義務関係が定められています。本サイトの利用に際しては、本規約の全文をお読みいただいたうえで、本規約に同意いただく必要があります。</p>
        <dl className="o-stack u-mb-xl">
          <dt className="c-sec-heading u-txt-center">第1条 適用</dt>
          <dd className="c-content-l">
            <ol className="c-count-list">
              <li>本規約は、本サイトの利用条件及び本サイトの利用に関する当社とユーザーとの間の権利義務関係を定めることを目的とし、ユーザーと当社との間の本サイトの利用に関わる一切の関係に適用されます。</li>
              <li>本規約の内容と、その他の本規約外における本サイトの説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。</li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第2条 定義</dt>
          <dd className="c-content-l">
            本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。
            <ol className="c-count-list c-count-list--secondary">
              <li>「知的財産権」とは、著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます。）を意味します。</li>
              <li>「当社」とは、xx株式会社を意味します。</li>
              <li>「当社ウェブサイト」とは、そのドメインが「examples..com」である、当社が運営するウェブサイト（理由の如何を問わず、当社のウェブサイトのドメインまたは内容が変更された場合は、当該変更後のウェブサイトを含みます。）を意味します。</li>
              <li>「ユーザー」とは、本サイトの利用者として情報の閲覧を行う個人または法人を意味します。</li>
              <li>「本サイト」とは、当社が提供するExampleという名称のウェブサイト（理由の如何を問わずウェブサイトの名称または内容が変更された場合は、当該変更後のウェブサイトを含みます。）を意味します。</li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第3条 サイトの利用</dt>
          <dd className="c-content-l">
            <ol className="c-count-list">
              <li>ユーザーは、本規約を遵守することに同意することにより、当社に対し、本サイトを利用することができます。</li>
              <li>本サイト訪問時、または当社からの通知を確認した時に、本規約の同意が成立したとみなし、ユーザーは本サイトを本規約に従い利用することができるようになります。</li>
              <li>当社は、ユーザーが、以下の各号のいずれかの事由に該当する場合は、本サイトの利用または閲覧を拒否することがあり、またその理由について一切開示義務を負いません。
                <ol className="c-count-list c-count-list--secondary">
                  <li>未成年者、成年被後見人、被保佐人または被補助人のいずれかであり、法定代理人、後見人、保佐人または補助人の同意等を得ていなかった場合</li>
                  <li>反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準ずる者を意味します。以下同じ。）である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等反社会的勢力等との何らかの交流もしくは関与を行っていると当社が判断した場合</li>
                  <li>過去当社との契約に違反した者またはその関係者であると当社が判断した場合</li>
                  <li>その他、本サイトの利用を適当でないと当社が判断した場合</li>
                </ol>
              </li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第4条 禁止事項</dt>
          <dd className="c-content-l">
            ユーザーは、本サイトの利用にあたり、以下の各号のいずれかに該当する行為または該当すると当社が判断する行為をしてはなりません。
            <ol className="c-count-list c-count-list--secondary">
              <li>法令に違反する行為または犯罪行為に関連する行為 </li>
              <li>当社、本サイトの他の利用者またはその他の第三者に対する詐欺または脅迫行為</li>
              <li>公序良俗に反する行為</li>
              <li>当社、本サイトの他の利用者またはその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為</li>
              <li>
                本サイトを通じ、以下に該当し、または該当すると当社が判断する情報を当社または本サイトの他の利用者に送信すること
                <ul className="c-disc-list">
                  <li>過度に暴力的または残虐な表現を含む情報</li>
                  <li>コンピューター・ウィルスその他の有害なコンピューター・プログラムを含む情報</li>
                  <li>当社、本サイトの他の利用者またはその他の第三者の名誉または信用を毀損する表現を含む情報</li>
                  <li>過度にわいせつな表現を含む情報</li>
                  <li>差別を助長する表現を含む情報</li>
                  <li>自殺、自傷行為を助長する表現を含む情報</li>
                  <li>薬物の不適切な利用を助長する表現を含む情報</li>
                  <li>反社会的な表現を含む情報</li>
                  <li>チェーンメール等の第三者への情報の拡散を求める情報</li>
                  <li>他人に不快感を与える表現を含む情報</li>
                </ul>
              </li>
              <li>本サイトのネットワークまたはシステム等に過度な負荷をかける行為</li>
              <li>当社が提供するソフトウェアその他のシステムに対するリバースエンジニアリングその他の解析行為</li>
              <li>本サイトの運営を妨害するおそれのある行為</li>
              <li>当社のネットワークまたはシステム等への不正アクセス</li>
              <li>第三者に成りすます行為</li>
              <li>当社が事前に許諾しない本サイト上での宣伝、広告、勧誘、または営業行為</li>
              <li>本サイトの他の利用者の情報の収集</li>
              <li>当社、本サイトの他の利用者またはその他の第三者に不利益、損害、不快感を与える行為</li>
              <li>当社ウェブサイト上で掲載する本サイト利用に関するルール(<a className="c-text-link" href="https://examples.com/terms" target="_blank" rel="noopener">https://examples.com/terms</a>)に抵触する行為</li>
              <li>反社会的勢力等への利益供与</li>
              <li>面識のない異性との出会いを目的とした行為</li>
              <li>前各号の行為を直接または間接に惹起し、または容易にする行為</li>
              <li>前各号の行為を試みること</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第5条 本サイトの停止等</dt>
          <dd className="c-content-l">
            当社は、以下のいずれかに該当する場合には、ユーザーに事前に通知することなく、本サイトの全部または一部の提供を停止または中断することができるものとします。
            <ol className="c-count-list c-count-list--secondary">
              <li>本サイトに係るコンピューター・システムの点検または保守作業を緊急に行う場合</li>
              <li>コンピューター、通信回線等の障害、誤操作、過度なアクセスの集中、不正アクセス、ハッキング等により本サイトの運営ができなくなった場合</li>
              <li>地震、落雷、火災、風水害、停電、天災地変などの不可抗力により本サイトの運営ができなくなった場合</li>
              <li>その他、当社が停止または中断を必要と判断した場合</li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第6条 権利帰属</dt>
          <dd className="c-content-l">
            <ol className="c-count-list">
              <li>当社ウェブサイト及び本サイトに関する知的財産権は全て当社または当社にライセンスを許諾している者に帰属しており、本規約に基づく本サイトの利用許諾は、当社ウェブサイトまたは本サイトに関する当社または当社にライセンスを許諾している者の知的財産権の使用許諾を意味するものではありません。</li>
              <li>ユーザーは、当社及び当社から権利を承継しまたは許諾された者に対して著作者人格権を行使しないことに同意するものとします。</li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第7条 本サイトの内容の変更、終了</dt>
          <dd className="c-content-l">
            <ol className="c-count-list">
              <li>当社は、当社の都合により、本サイトの内容を変更し、または提供を終了することができます。</li>
              <li>当社が本サイトの提供を終了する場合、当社はユーザーに事前に通知するものとします。</li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第8条 保証の否認及び免責</dt>
          <dd className="c-content-l">
            <ol className="c-count-list">
              <li>当社は、本サイトがユーザーの特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、ユーザーによる本サイトの利用がユーザーに適用のある法令または業界団体の内部規則等に適合すること、継続的に利用できること、及び不具合が生じないことについて、明示又は黙示を問わず何ら保証するものではありません。</li>
              <li>当社は、本サイトに関してユーザーが被った損害につき、過去12ヶ月間にユーザーが当社に支払った対価の金額を超えて賠償する責任を負わないものとし、また、付随的損害、間接損害、特別損害、将来の損害及び逸失利益にかかる損害については、賠償する責任を負わないものとします。</li>
              <li>本サイトまたは当社ウェブサイトに関連してユーザーと他のユーザーまたは第三者との間において生じた取引、連絡、紛争等については、ユーザーが自己の責任によって解決するものとします。</li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第9条 利用者情報の取扱い</dt>
          <dd className="c-content-l">
            <ol className="c-count-list">
              <li>当社によるユーザーの利用者情報の取扱いについては、別途当社プライバシーポリシー(<a className="c-text-link" href="https://examples.com/privacy-policy/" target="_blank" rel="noopener">https://examples.com/privacy-policy/</a>)の定めによるものとし、ユーザーはこのプライバシーポリシーに従って当社がユーザーの利用者情報を取扱うことについて同意するものとします。</li>
              <li>当社は、ユーザーが当社に提供した情報、データ等を、個人を特定できない形での統計的な情報として、当社の裁量で、利用及び公開することができるものとし、ユーザーはこれに異議を唱えないものとします。</li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第10条 本規約等の変更</dt>
          <dd className="c-content-l">
            当社は、当社が必要と認めた場合は、本規約を変更できるものとします。本規約を変更する場合、変更後の本規約の施行時期及び内容を当社ウェブサイト上での掲示その他の適切な方法により周知し、またはユーザーに通知します。但し、法令上ユーザーの同意が必要となるような内容の変更の場合は、当社所定の方法でユーザーの同意を得るものとします。
          </dd>
          <dt className="c-sec-heading u-txt-center">第11条 連絡／通知</dt>
          <dd className="c-content-l">
            <ol className="c-count-list">
              <li>本サイトに関する問い合わせその他ユーザーから当社に対する連絡または通知、及び本規約の変更に関する通知その他当社からユーザーに対する連絡または通知は、当社の定める方法で行うものとします。</li>
              <li>当社が問い合わせ等に含まれるメールアドレスその他の連絡先に連絡または通知を行った場合、ユーザーは当該連絡または通知を受領したものとみなします。</li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第12条 分離可能性</dt>
          <dd className="c-content-l">
            本規約のいずれかの条項またはその一部が、消費者契約法その他の法令等により無効または執行不能と判断された場合であっても、本規約の残りの規定及び一部が無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。
          </dd>
          <dt className="c-sec-heading u-txt-center">第13条 準拠法及び管轄裁判所</dt>
          <dd className="c-content-l">
            <ol className="c-count-list">
              <li>本規約及びサイト利用契約の準拠法は日本法とします。</li>
              <li>本規約またはサイト利用契約に起因し、または関連する一切の紛争については、xx地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
            </ol>
          </dd>
        </dl>
        <p className="c-suppl-l u-txt-right">【2023年00月00日 制定】</p>
      </div>
      <nav className="o-center u-mt-xl u-mb-xl">
        <ol className="o-reel o-reel--breadcrumb">
          <li className="c-breadcrumb-item">
            <a href="#" className="o-icon-parent c-text-link c-text-link--no-underline c-content-l">
              <IconHome />
              ホーム
            </a>
          </li>
          <li className="c-breadcrumb-item">
            <a href="#" className="c-text-link c-text-link--no-underline c-content-l">
              サイト規約
            </a>
          </li>
        </ol>
      </nav>
      <div className="o-center">
        <h1 className="c-heading">プライバシーポリシー</h1>
        <p className="c-content-l">株式会社xx（以下「当社」といいます。）は、当社の提供するサービス（以下「本サービス」といいます。）における、ユーザーについての個人情報を含む利用者情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。</p>
        <dl className="o-stack u-mb-xl">
          <dt className="c-sec-heading u-txt-center">第1条 収集する利用者情報及び収集方法</dt>
          <dd className="c-content-l">
            本ポリシーにおいて、「利用者情報」とは、ユーザーの識別に係る情報、通信サービス上の行動履歴、その他ユーザーまたはユーザーの端末に関連して生成または蓄積された情報であって、本ポリシーに基づき当社が収集するものを意味するものとします。本サービスにおいて当社が収集する利用者情報は、その収集方法に応じて、以下のようなものとなります。
            <ol className="c-count-list c-count-list--secondary">
              <li>
                <span className="u-txt-weight-b">ユーザーからご提供いただく情報</span><br />
                本サービスを利用するために、または本サービスの利用を通じてユーザーからご提供いただく情報は以下のとおりです。
                <ul className="c-disc-list">
                  <li>氏名、生年月日、性別、職業等プロフィールに関する情報</li>
                  <li>メールアドレス、電話番号、住所等連絡先に関する情報</li>
                  <li>クレジットカード情報、銀行口座情報、電子マネー情報等決済手段に関する情報</li>
                  <li>ユーザーの肖像を含む静止画情報</li>
                  <li>入力フォームその他当社が定める方法を通じてユーザーが入力または送信する情報</li>
                </ul>
              </li>
              <li>
                <span className="u-txt-weight-b">ユーザーが本サービスの利用において、他のサービスと連携を許可することにより、当該他のサービスからご提供いただく情報</span><br />
                ユーザーが、本サービスを利用するにあたり、ソーシャルネットワーキングサービス等の他のサービスとの連携を許可した場合には、その許可の際にご同意いただいた内容に基づき、以下の情報を当該外部サービスから収集します。
                <ul className="c-disc-list">
                  <li>当該外部サービスでユーザーが利用するID</li>
                  <li>その他当該外部サービスのプライバシー設定によりユーザーが連携先に開示を認めた情報</li>
                </ul>
              </li>
              <li>
                <span className="u-txt-weight-b">ユーザーが本サービスを利用するにあたって、当社が収集する情報</span><br />
                当社は、本サービスへのアクセス状況やそのご利用方法に関する情報を収集することがあります。これには以下の情報が含まれます。
                <ul className="c-disc-list">
                  <li>リファラ</li>
                  <li>IPアドレス</li>
                  <li>サーバーアクセスログに関する情報</li>
                  <li>Cookie、ADID、IDFAその他の識別子</li>
                </ul>
              </li>
              <li>
                <span className="u-txt-weight-b">ユーザーが本サービスを利用するにあたって、当社がユーザーの個別同意に基づいて収集する情報</span><br />
                当社は、ユーザーが3-1に定める方法により個別に同意した場合、当社は以下の情報を利用中の端末から収集します。
                <ul className="c-disc-list">
                  <li>位置情報</li>
                </ul>
              </li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第2条 利用目的</dt>
          <dd className="c-content-l">
            本サービスのサービス提供にかかわる利用者情報の具体的な利用目的は以下のとおりです。
            <ol className="c-count-list c-count-list--secondary">
              <li>本サービスに関する登録の受付、本人確認、ユーザー認証、ユーザー設定の記録、利用料金の決済計算等本サービスの提供、維持、保護及び改善のため</li>
              <li>ユーザーのトラフィック測定及び行動測定のため</li>
              <li>広告の配信、表示及び効果測定のため</li>
              <li>本サービスに関するご案内、お問い合わせ等への対応のため</li>
              <li>本サービスに関する当社の規約、ポリシー等（以下「規約等」といいます。）に違反する行為に対する対応のため</li>
              <li>本サービスに関する規約等の変更などを通知するため</li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第3条 通知・公表または同意取得の方法、利用中止要請の方法</dt>
          <dd className="c-content-l">
            <ol className="c-count-list">
              <li>以下の利用者情報については、その収集が行われる前にユーザーの同意を得るものとします。
                <ul className="c-disc-list">
                  <li>位置情報</li>
                </ul>
              </li>
              <li>ユーザーは、本サービスの所定の設定を行うことにより、利用者情報の全部または一部についてその収集又は利用の停止を求めることができ、この場合、当社は速やかに、当社の定めるところに従い、その利用を停止します。なお利用者情報の項目によっては、その収集または利用が本サービスの前提となるため、当社所定の方法により本サービスを退会した場合に限り、当社はその収集又は利用を停止します。</li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第4条 外部送信、第三者提供、情報収集モジュールの有無</dt>
          <dd className="c-content-l">
            本サービスには以下の情報収集モジュールが組み込まれています。これらの情報収集モジュールは、ユーザーの端末にCookieを保存し、これを利用して利用者情報を蓄積及び利用する場合があります。また、モジュール提供者（日本国外にある者を含みます。）へ利用者情報を提供する場合があります。提携先のプライバシーポリシー、オプトアウト、第三者提供の有無等については個別にご確認いただき、必要に応じて無効化してください。
            <ol className="c-count-list">
              <li>
                Google Analytics
                <dl className="o-sidebar o-sidebar--table">
                  <dt className="o-box o-box--thead c-content-l">
                    提携先
                  </dt>
                  <dd className="o-box o-box--tbody c-content-l">
                    グーグル合同会社
                  </dd>
                  <dt className="o-box o-box--thead c-content-l">
                    利用目的
                  </dt>
                  <dd className="o-box o-box--tbody c-content-l">
                    アクセス情報の解析、サービス、サイトの改善
                  </dd>
                  <dt className="o-box o-box--thead c-content-l">
                    プライバシーポリシーのURL
                  </dt>
                  <dd className="o-box o-box--tbody c-content-l">
                    <a className="o-icon-parent o-icon-parent--full-wide c-text-link" href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener">
                      https://policies.google.com/privacy?hl=ja
                      <IconExternal />
                    </a>
                  </dd>
                  <dt className="o-box o-box--thead c-content-l">
                  オプトアウト（無効化）URL
                  </dt>
                  <dd className="o-box o-box--tbody c-content-l">
                    <a className="o-icon-parent o-icon-parent--full-wide c-text-link" href="https://support.google.com/analytics/answer/181881?hl=ja" target="_blank" rel="noopener">
                      https://support.google.com/analytics/answer/181881?hl=ja
                      <IconExternal />
                    </a>
                  </dd>
                </dl>
              </li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第5条 第三者提供</dt>
          <dd className="c-content-l">
          当社は、利用者情報のうち、個人情報については、あらかじめユーザーの同意を得ないで、第三者（日本国外にある者を含みます。）に提供しません。但し、次に掲げる必要があり第三者（日本国外にある者を含みます。）に提供する場合はこの限りではありません。
          <ol className="c-count-list c-count-list--secondary">
            <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
            <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
            <li>第4条の定めに従って、提携先または情報収集モジュール提供者へ個人情報が提供される場合</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合</li>
            <li>その他、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の法令で認められる場合</li>
          </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第6条 共同利用</dt>
          <dd className="c-content-l">
            <p>当社は、以下のとおりユーザーの個人情報を共同利用します。</p>
            <dl className="o-sidebar o-sidebar--table">
              <dt className="o-box o-box--thead c-content-l">
                <span className="o-icon-parent">
                  <span>(1)</span>
                  共同して利用される個人情報の項目
                </span>
              </dt>
              <dd className="o-box o-box--tbody c-content-l">
                <ul className="c-disc-list">
                  <li>氏名</li>
                  <li>メールアドレス</li>
                  <li>その他当社が定める入力フォームにユーザーが入力する情報</li>
                </ul>
              </dd>
              <dt className="o-box o-box--thead c-content-l">
                <span className="o-icon-parent">
                  <span>(2)</span>
                  共同して利用する者の範囲
                </span>
              </dt>
              <dd className="o-box o-box--tbody c-content-l">
                当社と機密保持契約を結んだ個人または法人
              </dd>
              <dt className="o-box o-box--thead c-content-l">
                <span className="o-icon-parent">
                  <span>(3)</span>
                  共同して利用する者の利用目的
                </span>
              </dt>
              <dd className="o-box o-box--tbody c-content-l">
                当該サービスにおける利用目的と同じ
              </dd>
              <dt className="o-box o-box--thead c-content-l">
                <span className="o-icon-parent">
                  <span>(4)</span>
                  個人情報の管理について責任を有する者の氏名または名称
                </span>
              </dt>
              <dd className="o-box o-box--tbody c-content-l">
                xx xx
              </dd>
            </dl>
          </dd>
          <dt className="c-sec-heading u-txt-center">第7条 個人情報の開示</dt>
          <dd className="c-content-l">
            当社は、ユーザーから、個人情報保護法の定めに基づき個人情報の開示を求められたときは、ユーザーご本人からのご請求であることを確認の上で、ユーザーに対し、遅滞なく開示を行います（当該個人情報が存在しないときにはその旨を通知いたします。）。但し、個人情報保護法その他の法令により、当社が開示の義務を負わない場合は、この限りではありません。なお、個人情報の開示につきましては、手数料（1件あたり1,000円）を頂戴しておりますので、あらかじめ御了承ください。
          </dd>
          <dt className="c-sec-heading u-txt-center">第8条 個人情報の訂正及び利用停止等</dt>
          <dd className="c-content-l">
            <ol className="c-count-list">
              <li>当社は、ユーザーから、(1)個人情報が真実でないという理由によって個人情報保護法の定めに基づきその内容の訂正を求められた場合、及び(2)あらかじめ公表された利用目的の範囲を超えて取扱われているという理由または偽りその他不正の手段により収集されたものであるという理由により、個人情報保護法の定めに基づきその利用の停止を求められた場合には、ユーザーご本人からのご請求であることを確認の上で遅滞なく必要な調査を行い、その結果に基づき、個人情報の内容の訂正または利用停止を行い、その旨をユーザーに通知します。なお、訂正または利用停止を行わない旨の決定をしたときは、ユーザーに対しその旨を通知いたします。</li>
              <li>当社は、ユーザーから、ユーザーの個人情報について消去を求められた場合、当社が当該請求に応じる必要があると判断した場合は、ユーザーご本人からのご請求であることを確認の上で、個人情報の消去を行い、その旨をユーザーに通知します。</li>
              <li>個人情報保護法その他の法令により、当社が訂正等または利用停止等の義務を負わない場合は、第8条1項および第8条2項の規定は適用されません。</li>
            </ol>
          </dd>
          <dt className="c-sec-heading u-txt-center">第9条 お問い合わせ窓口</dt>
          <dd className="c-content-l">
            <p>ご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関するお問い合わせは、下記の窓口までお願いいたします。</p>
            <dl className="o-sidebar o-sidebar--table">
              <dt className="o-box o-box--thead c-content-l">
                会社名
              </dt>
              <dd className="o-box o-box--tbody c-content-l">
                xx株式会社
              </dd>
              <dt className="o-box o-box--thead c-content-l">
                個人情報取扱責任者
              </dt>
              <dd className="o-box o-box--tbody c-content-l">
                xx xx
              </dd>
              <dt className="o-box o-box--thead c-content-l">
                連絡先
              </dt>
              <dd className="o-box o-box--tbody c-content-l">
                <a className="c-text-link" href="mailto:info@examples.com" target="_blank" rel="noopener">info@examples.com</a>
              </dd>
            </dl>
          </dd>
          <dt className="c-sec-heading u-txt-center">第10条 プライバシーポリシーの変更手続</dt>
          <dd className="c-content-l">
            当社は、必要に応じて、本ポリシーを変更します。但し、法令上ユーザーの同意が必要となるような本ポリシーの変更を行う場合、変更後の本ポリシーは、当社所定の方法で変更に同意したユーザーに対してのみ適用されるものとします。なお、当社は、本ポリシーを変更する場合には、変更後の本ポリシーの施行時期及び内容を当社のウェブサイト上での表示その他の適切な方法により周知し、またはユーザーに通知します。
          </dd>
        </dl>
        <p className="c-suppl-l u-txt-right">【2023年00月00日 制定】</p>
      </div>
      <nav className="o-center u-mt-xl u-mb-xl">
        <ol className="o-reel o-reel--breadcrumb">
          <li className="c-breadcrumb-item">
            <a href="#" className="o-icon-parent c-text-link c-text-link--no-underline c-content-l">
              <IconHome />
              ホーム
            </a>
          </li>
          <li className="c-breadcrumb-item">
            <a href="#" className="c-text-link c-text-link--no-underline c-content-l">
              プライバシーポリシー
            </a>
          </li>
        </ol>
      </nav>
      <div className="o-center">
        <h1 className="c-heading">ブログ一覧</h1>
        <ul className="o-grid o-grid--tri">
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time className="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time className="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time className="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time className="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time className="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time className="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
        </ul>
      </div>
      <Pager />
      <nav className="o-center u-mt-xl u-mb-xl">
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
        </ol>
      </nav>
      <div className="o-center">
        <h1 className="c-heading">ブログ一覧</h1>
        <ul className="o-grid o-grid--quart">
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time>約6ヶ月前</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time>約6ヶ月前</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time>約6ヶ月前</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time>約6ヶ月前</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time>約6ヶ月前</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time>約6ヶ月前</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time>約6ヶ月前</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
          <li>
            <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
              <picture className="o-frame">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              <footer className="o-box o-box--card-inner o-stack o-stack--m">
                <span className="o-cluster o-cluster--middle">
                  <time>約6ヶ月前</time>
                  <span className="o-box o-box--cat">category</span>
                </span>
                <h3 className="c-card-link">サンプルタイトル</h3>
              </footer>
            </a>
          </li>
        </ul>
      </div>
      <Pager />
      <nav className="o-center u-mt-xl u-mb-xl">
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
        </ol>
      </nav>
      <article className="o-center o-center--content o-box o-box--entry">
        <h1 className="c-heading">サンプルニュース</h1>
        <div className="o-stack o-stack--l">
          <time className="c-content-m c-number-text-variant u-txt-weight-b">2023.00.00</time>
          <div className="c-entry">
            <p>aaa</p>
            <p>aaa</p>
          </div>
          <h2 className="c-sec-heading">シェア・共有</h2>
          <div className="c-share-parent">
            <input type="text" className="o-box o-box--input o-box--full-wide o-box--share c-content-l" value="https://examples.com/information/xx/" readOnly={true} />
            <IconClone />
          </div>
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
      <nav className="o-center u-mt-xl u-mb-xl">
        <ol className="o-reel o-reel--breadcrumb">
          <li className="c-breadcrumb-item">
            <a href="#" className="o-icon-parent c-text-link c-text-link--no-underline c-content-l">
              <IconHome />
              ホーム
            </a>
          </li>
          <li className="c-breadcrumb-item">
            <a href="#" className="c-text-link c-text-link--no-underline c-content-l">
              お知らせ一覧
            </a>
          </li>
          <li className="c-breadcrumb-item">
            <a href="#" className="c-text-link c-text-link--no-underline c-content-l">
              サンプルニュース
            </a>
          </li>
        </ol>
      </nav>
      <article className="o-center o-center--content o-box o-box--entry">
        <h1 className="c-heading">サンプルブログ</h1>
        <div className="o-stack o-stack--l">
          <div className="o-sidebar o-sidebar--bio">
            <div className="o-sidebar__bio-pict">
            <picture className="o-frame o-frame--round">
              <source type="image/avif" srcSet="img/profile.avif" />
              <source type="image/webp" srcSet="img/profile.webp" />
              <img
                src="img/profile.png"
                width="100%"
                height="100%"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                alt=""
              />
            </picture>
            </div>
            <div className="o-sidebar__bio-data o-stack">
              <span className="c-content-m u-txt-brand u-txt-weight-b">XX XX</span>
              <div className="o-cluster">
                <time className="o-icon-parent">
                  <IconCal />
                  <span className="c-content-m c-number-text-variant u-txt-weight-b">
                    2023.00.00
                  </span>
                </time>
                <time className="o-icon-parent">
                  <IconRotate />
                  <span className="c-content-m c-number-text-variant u-txt-weight-b">
                    2023.00.00
                  </span>
                </time>
              </div>
            </div>
          </div>
          <p className="c-content-l">
            どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。天の川のなかでたった一つのちりのように高くはねあがり、どおとはげしい音がしてだまっていました。新世界交響楽はいよいよはっきり地平線のはてから、かすかなかすかな旋律が糸のように足をのばしていました。その人はもう行ってしまいました。
          </p>
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
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
          <div className="c-entry">
            <h2>見出し1</h2>
            <p>どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。天の川のなかでたった一つのちりのように高くはねあがり、どおとはげしい音がしてだまっていました。新世界交響楽はいよいよはっきり地平線のはてから、かすかなかすかな旋律が糸のように足をのばしていました。その人はもう行ってしまいました。</p>
            <picture className="o-frame o-frame--bordered">
              <source type="image/avif" srcSet="img/thumb.avif" />
              <source type="image/webp" srcSet="img/thumb.webp" />
              <img
                src="img/thumb.png"
                width="100%"
                height="100%"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                alt=""
              />
            </picture>
            <h3>小見出し1</h3>
            <p>どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。天の川のなかでたった一つのちりのように高くはねあがり、どおとはげしい音がしてだまっていました。新世界交響楽はいよいよはっきり地平線のはてから、かすかなかすかな旋律が糸のように足をのばしていました。その人はもう行ってしまいました。</p>
          </div>
          <h2 className="c-sec-heading">オススメ記事</h2>
          <p className="c-content-l">どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので</p>
          <a href="#" className="o-box o-box--blog-embed o-stack o-stack--m">
            <div className="o-sidebar">
              <div className="o-sidebar__narrow">
                <picture className="o-frame o-frame--bordered">
                <source type="image/avif" srcSet="img/thumb.avif" />
                <source type="image/webp" srcSet="img/thumb.webp" />
                <img
                  src="img/thumb.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              </div>
              <div className="o-sidebar__wide o-stack o-stack--s">
                <h3 className="c-display-xs u-txt-weight-m">サンプル記事</h3>
                <span className="c-suppl-l u-txt-dimmed">どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、</span>
              </div>
            </div>
            <div className="o-sidebar o-sidebar--bio">
              <div className="o-sidebar__bio-pict">
              <picture className="o-frame o-frame--round">
                <source type="image/avif" srcSet="img/profile.avif" />
                <source type="image/webp" srcSet="img/profile.webp" />
                <img
                  src="img/profile.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
              </div>
              <div className="o-sidebar__bio-data o-stack">
                <span className="c-content-m u-txt-brand u-txt-weight-b">XX XX</span>
                <div className="o-cluster">
                  <time className="o-icon-parent">
                    <IconCal />
                    <span className="c-content-m c-number-text-variant u-txt-weight-b">
                      2023.00.00
                    </span>
                  </time>
                </div>
              </div>
            </div>
          </a>
          <div className="o-cluster">
            <a href="#" className="o-icon-parent c-content-l c-text-link c-text-link--no-underline u-txt-weight-m">
              <IconCategory />
              Category
            </a>
          </div>
          <div className="o-cluster">
            <a href="#" className="o-box o-box--ghost-button c-content-m o-icon-parent o-icon-parent--center">
              <span className="o-icon">#</span>
              タグ
            </a>
          </div>
          <h2 className="c-sec-heading">シェア・共有</h2>
          <div className="c-share-parent">
            <input type="text" className="o-box o-box--input o-box--full-wide o-box--share c-content-l" value="https://examples.com/information/xx/" readOnly={true} />
            <IconClone />
          </div>
          <div className="o-sidebar">
            <div className="o-sidebar__author-pict u-block-center">
              <picture className="o-frame o-frame--round">
                <source type="image/avif" srcSet="img/profile.avif" />
                <source type="image/webp" srcSet="img/profile.webp" />
                <img
                  src="img/profile.png"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  alt=""
                />
              </picture>
            </div>
            <div className="o-sidebar__author-data o-stack o-stack--s">
              <dl className="o-stack o-stack--s">
                <dt className="c-author-name u-block-center c-display-xs u-txt-weight-b u-txt-brand">XX XX</dt>
                <dd className="c-content-m">
                  どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。天の川のなかでたった一つのちりのように高くはねあがり、どおとはげしい音がしてだまっていました。新世界交響楽はいよいよはっきり地平線のはてから、かすかなかすかな旋律が糸のように足をのばしていました。その人はもう行ってしまいました。
                </dd>
              </dl>
              <div className="o-cluster">
                <a className="c-text-link c-text-link--no-underline c-display-m" href="https://www.facebook.com/" target="_blank" rel="noopener">
                  <IconFacebook />
                </a>
                <a className="c-text-link c-text-link--no-underline c-display-m" href="https://twitter.com/" target="_blank" rel="noopener">
                  <IconTwitter />
                </a>
                <a className="c-text-link c-text-link--no-underline c-display-m" href="https://twitter.com/" target="_blank" rel="noopener">
                  <IconX />
                </a>
                <a className="c-text-link c-text-link--no-underline c-display-m" href="https://www.instagram.com/" target="_blank" rel="noopener">
                  <IconInstagram />
                </a>
                <a className="c-text-link c-text-link--no-underline c-display-m" href="https://www.youtube.com/" target="_blank" rel="noopener">
                  <IconYoutube />
                </a>
                <a className="c-text-link c-text-link--no-underline c-display-m" href="https://www.linkedin.com/" target="_blank" rel="noopener">
                  <IconLinkedin />
                </a>
                <a className="c-text-link c-text-link--no-underline c-display-m" href="https://www.google.com/" target="_blank" rel="noopener">
                  <IconLink />
                </a>
              </div>
            </div>
          </div>
          <h3 className="c-sec-heading">関連記事</h3>
          <ul className="o-stack o-stack--l">
            <li>
              <a href="#" className="o-sidebar o-box o-box--bg-fill o-box--blog-card">
                <span className="o-sidebar__narrow">
                  <picture className="o-frame o-frame--square">
                    <source type="image/avif" srcSet="img/thumb.avif" />
                    <source type="image/webp" srcSet="img/thumb.webp" />
                    <img
                      src="img/thumb.png"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      alt=""
                    />
                  </picture>
                </span>
                <span className="o-sidebar__wide o-box o-box--card-inner o-stack o-stack--m">
                  <span class="o-cluster o-cluster--middle">
                    <time class="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
                    <span class="o-box o-box--cat">category</span>
                  </span>
                  <h3 class="c-card-link">サンプルタイトル</h3>
                  <span className="c-content-m">
                    どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="o-sidebar o-box o-box--bg-fill o-box--blog-card">
                <span className="o-sidebar__narrow">
                  <picture className="o-frame o-frame--square">
                    <source type="image/avif" srcSet="img/thumb.avif" />
                    <source type="image/webp" srcSet="img/thumb.webp" />
                    <img
                      src="img/thumb.png"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      alt=""
                    />
                  </picture>
                </span>
                <span className="o-sidebar__wide o-box o-box--card-inner o-stack o-stack--m">
                  <span class="o-cluster o-cluster--middle">
                    <time class="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
                    <span class="o-box o-box--cat">category</span>
                  </span>
                  <h3 class="c-card-link">サンプルタイトル</h3>
                  <span className="c-content-m">
                    どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="o-sidebar o-box o-box--bg-fill o-box--blog-card">
                <span className="o-sidebar__narrow">
                  <picture className="o-frame o-frame--square">
                    <source type="image/avif" srcSet="img/thumb.avif" />
                    <source type="image/webp" srcSet="img/thumb.webp" />
                    <img
                      src="img/thumb.png"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      alt=""
                    />
                  </picture>
                </span>
                <span className="o-sidebar__wide o-box o-box--card-inner o-stack o-stack--m">
                  <span class="o-cluster o-cluster--middle">
                    <time class="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
                    <span class="o-box o-box--cat">category</span>
                  </span>
                  <h3 class="c-card-link">サンプルタイトル</h3>
                  <span className="c-content-m">
                    どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="o-sidebar o-box o-box--bg-fill o-box--blog-card">
                <span className="o-sidebar__narrow">
                  <picture className="o-frame o-frame--square">
                    <source type="image/avif" srcSet="img/thumb.avif" />
                    <source type="image/webp" srcSet="img/thumb.webp" />
                    <img
                      src="img/thumb.png"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      alt=""
                    />
                  </picture>
                </span>
                <span className="o-sidebar__wide o-box o-box--card-inner o-stack o-stack--m">
                  <span class="o-cluster o-cluster--middle">
                    <time class="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
                    <span class="o-box o-box--cat">category</span>
                  </span>
                  <h3 class="c-card-link">サンプルタイトル</h3>
                  <span className="c-content-m">
                    どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="o-sidebar o-box o-box--bg-fill o-box--blog-card">
                <span className="o-sidebar__narrow">
                  <picture className="o-frame o-frame--square">
                    <source type="image/avif" srcSet="img/thumb.avif" />
                    <source type="image/webp" srcSet="img/thumb.webp" />
                    <img
                      src="img/thumb.png"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      alt=""
                    />
                  </picture>
                </span>
                <span className="o-sidebar__wide o-box o-box--card-inner o-stack o-stack--m">
                  <span class="o-cluster o-cluster--middle">
                    <time class="c-content-l c-number-text-variant u-txt-weight-b">2023.00.00</time>
                    <span class="o-box o-box--cat">category</span>
                  </span>
                  <h3 class="c-card-link">サンプルタイトル</h3>
                  <span className="c-content-m">
                    どうか、まあおとりくださいジョバンニは坊ちゃんといわれたので、光る粒すなわち星しか見えないでしょう。ふりかえって見ると、ちょうど水が深いほど青く見えるように、ちらちらゆれたり顫えたりしました。
                  </span>
                </span>
              </a>
            </li>
          </ul>
          <div className="u-txt-center">
            <a href="#" className="o-box o-box--button o-box--rect-button o-icon-parent">
              ブログ一覧
              <IconNext />
            </a>
          </div>
        </div>
      </article>
      <nav className="o-center u-mt-xl u-mb-xl">
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
      </nav>
      <NewsList />
      <Switch />
      <picture className="o-frame o-frame--bordered">
        <source type="image/avif" srcSet="img/thumb.avif" />
        <source type="image/webp" srcSet="img/thumb.webp" />
        <img
          src="img/thumb.png"
          width="100%"
          height="100%"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          alt=""
        />
      </picture>
      <div className="o-box">aaa</div>
      <div className="o-center">aaa</div>
      <div className="o-sidebar">
        <div>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </div>
        <p>aaa</p>
      </div>
      <ul className="o-grid o-grid--tri">
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
      </ul>
      <ul className="o-grid o-grid--quart">
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
        <li>
          <picture className="o-frame o-frame--bordered">
            <source type="image/avif" srcSet="img/thumb.avif" />
            <source type="image/webp" srcSet="img/thumb.webp" />
            <img
              src="img/thumb.png"
              width="100%"
              height="100%"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              alt=""
            />
          </picture>
        </li>
      </ul>
      <div className="o-cover">
        <p>aaa</p>
        <div className="o-cover__middle">aaa</div>
        <span>aaa</span>
      </div>
      <div className="o-grid">
        <div className="o-box o-box--bordered">aaa</div>
        <div className="o-box o-box--bordered">aaa</div>
        <div className="o-box o-box--bordered">aaa</div>
        <div className="o-box o-box--bordered">aaa</div>
      </div>
      <ul className="o-reel">
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>e</li>
        <li>f</li>
        <li>g</li>
        <li>h</li>
        <li>i</li>
        <li>j</li>
      </ul>
      <div className="o-imposter-parent">
        <picture className="o-frame o-frame--bordered">
          <source type="image/avif" srcSet="img/thumb.avif" />
          <source type="image/webp" srcSet="img/thumb.webp" />
          <img
            src="img/thumb.png"
            width="100%"
            height="100%"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            alt=""
          />
        </picture>
        <div className="o-imposter">
          <p>a</p>
        </div>
      </div>
      <div className="o-icon-parent">
        <span className="o-icon">
          <svg width="54" height="96" viewBox="0 0 54 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.0898438 47.9805C0.0898438 47.3555 0.207031 46.7695 0.441406 46.2227C0.675781 45.6758 1.04688 45.168 1.55469 44.6992L45.6172 2.04297C46.4766 1.14453 47.5508 0.695312 48.8398 0.695312C49.6992 0.695312 50.4609 0.890625 51.125 1.28125C51.8281 1.67188 52.375 2.21875 52.7656 2.92188C53.1953 3.58594 53.4102 4.36719 53.4102 5.26562C53.4102 6.47656 52.9805 7.55078 52.1211 8.48828L11.2227 47.9805L52.1211 87.5312C52.9805 88.4297 53.4102 89.5039 53.4102 90.7539C53.4102 91.6133 53.1953 92.3945 52.7656 93.0977C52.375 93.8008 51.8281 94.3281 51.125 94.6797C50.4609 95.0703 49.6992 95.2656 48.8398 95.2656C47.5508 95.2656 46.4766 94.8359 45.6172 93.9766L1.55469 51.3203C1.04688 50.8516 0.675781 50.3438 0.441406 49.7969C0.207031 49.25 0.0898438 48.6445 0.0898438 47.9805Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span>テキスト</span>
      </div>
      <h1 className="c-heading">Heading</h1>
      <h2 className="c-sec-heading">Heading</h2>
      <h3 className="c-ter-heading">Heading</h3>
      <h4 className="c-qua-heading">Heading</h4>
      <h5 className="c-qui-heading">Heading</h5>
      <h6 className="c-sen-heading">Heading</h6>
      <div className="c-display-2xl">Display Text</div>
      <div className="c-display-xl">Display Text</div>
      <div className="c-display-l">Display Text</div>
      <div className="c-display-m">Display Text</div>
      <div className="c-display-s">Display Text</div>
      <div className="c-display-xs">Display Text</div>
      <div className="c-display-2xs">Display Text</div>
      <p className="c-body-l">
        なんだかあたりまえのような、がらんとしたんだ。お前は夢の中でとまってそれをしらべてみましたら、そのいままでカムパネルラのすわっていたのでした。わたしたちはこんないいとこを旅して、そっちを見あげてくつくつ笑いました。そのときにわかに大きな音がしました。そしてきゅうくつな上着の肩を気にしながら、それを二つにちぎってわたしました。
      </p>
      <p className="c-body-m">
        なんだかあたりまえのような、がらんとしたんだ。お前は夢の中でとまってそれをしらべてみましたら、そのいままでカムパネルラのすわっていたのでした。わたしたちはこんないいとこを旅して、そっちを見あげてくつくつ笑いました。そのときにわかに大きな音がしました。そしてきゅうくつな上着の肩を気にしながら、それを二つにちぎってわたしました。
      </p>
      <div className="c-label-l">Label</div>
      <div className="c-label-m">Label</div>
      <div className="c-suppl-l">補足</div>
      <div className="c-suppl-m">補足</div>
      <a href="#" className="c-btn">
        Btn
      </a>
      <div className="c-notes">注釈</div>
      <ul className="o-stack">
        <li className="c-notes">注釈</li>
        <li className="c-notes">注釈</li>
      </ul>
      <ul className="c-disc-list">
        <li>item</li>
        <li>item</li>
      </ul>
      <ol className="c-count-list">
        <li>
          itemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitem
        </li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>
          item
          <ol className="c-count-list">
            <li>
              itemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitem
            </li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ol>
        </li>
      </ol>
      <ol className="c-count-list c-count-list--secondary">
        <li>
          itemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitem
        </li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ol>
    </>
  );
}

export default App;
