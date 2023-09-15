import "./styles/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IconPhone } from "./components/IconPhone";
import { IconMail } from "./components/IconMail";
import { IconFacebook } from "./components/IconFacebook";
import { IconTwitter } from "./components/IconTwitter";
import { IconX } from "./components/IconX";
import { IconInstagram } from "./components/IconInstagram";
import { IconYoutube } from "./components/IconYoutube";
import { NotFound } from "./components/pages/NotFound";
import { NewsList } from "./components/NewsList";
import { BlogList } from "./components/BlogList";
import { NewsArchive } from "./components/pages/NewsArchive";
import { NewsSingle } from "./components/pages/NewsSingle";
import { BlogArchive } from "./components/pages/BlogArchive";
import { BlogArchiveVar } from "./components/pages/BlogArchiveVar";
import { BlogSingle } from "./components/pages/BlogSingle";
import { Company } from "./components/pages/Company";
import { Inquiry } from "./components/pages/Inquiry";
import { Terms } from "./components/pages/Terms";
import { PrivacyPolicy } from "./components/pages/PrivacyPolicy";
import { Pager } from "./components/Pager";
import { BreadCrumb } from "./components/BreadCrumb";

function App() {
  return (
    <>
      <header className="o-center c-header">
        <a href="#" className="o-icon-parent o-icon-parent--center o-icon-parent--head-logo c-display-m u-txt-weight-m">
          <svg className="o-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M32 0H0V32H32V0ZM9.15775 13.2922H11.4987V18.7311H9.15775C8.39686 18.7311 7.70196 18.9135 7.07305 19.2785C6.44415 19.6434 5.93948 20.1364 5.55903 20.7575C5.18634 21.3787 5 22.0736 5 22.8422C5 23.6109 5.18634 24.3097 5.55903 24.9386C5.93948 25.5753 6.44415 26.0799 7.07305 26.4526C7.70196 26.8253 8.39686 27.0116 9.15775 27.0116C9.92641 27.0116 10.6252 26.8253 11.2541 26.4526C11.883 26.0799 12.3838 25.5753 12.7565 24.9386C13.1292 24.3097 13.3155 23.6109 13.3155 22.8422V20.513H18.6845V22.8422C18.6845 23.6109 18.8708 24.3097 19.2435 24.9386C19.624 25.5753 20.1286 26.0799 20.7575 26.4526C21.3864 26.8253 22.0813 27.0116 22.8422 27.0116C23.6109 27.0116 24.3097 26.8253 24.9386 26.4526C25.5675 26.0799 26.0683 25.5753 26.441 24.9386C26.8137 24.3097 27 23.6109 27 22.8422C27 22.0736 26.8137 21.3787 26.441 20.7575C26.0683 20.1364 25.5675 19.6434 24.9386 19.2785C24.3097 18.9135 23.6109 18.7311 22.8422 18.7311H20.5013V13.2922H22.8422C23.6109 13.2922 24.3097 13.1098 24.9386 12.7448C25.5675 12.3799 26.0683 11.8869 26.441 11.2657C26.8137 10.6446 27 9.94971 27 9.18105C27 8.41239 26.8137 7.71361 26.441 7.0847C26.0683 6.44803 25.5675 5.94336 24.9386 5.57067C24.3097 5.19022 23.6109 5 22.8422 5C22.0813 5 21.3864 5.19022 20.7575 5.57067C20.1286 5.94336 19.624 6.44803 19.2435 7.0847C18.8708 7.71361 18.6845 8.41239 18.6845 9.18105V11.5103H13.3155V9.18105C13.3155 8.41239 13.1292 7.71361 12.7565 7.0847C12.3838 6.44803 11.883 5.94336 11.2541 5.57067C10.6252 5.19022 9.92641 5 9.15775 5C8.39686 5 7.70196 5.19022 7.07305 5.57067C6.44415 5.94336 5.93948 6.44803 5.55903 7.0847C5.18634 7.71361 5 8.41239 5 9.18105C5 9.94971 5.18634 10.6446 5.55903 11.2657C5.93948 11.8869 6.44415 12.3799 7.07305 12.7448C7.70196 13.1098 8.39686 13.2922 9.15775 13.2922ZM11.4987 11.5336H9.15775C8.73072 11.5336 8.33863 11.4288 7.98147 11.2192C7.63208 11.0018 7.34869 10.7145 7.13129 10.3573C6.92165 10.0002 6.81683 9.60808 6.81683 9.18105C6.81683 8.74625 6.92165 8.35027 7.13129 7.99312C7.34869 7.63596 7.63208 7.35257 7.98147 7.14293C8.33863 6.92553 8.73072 6.81683 9.15775 6.81683C9.58479 6.81683 9.973 6.92553 10.3224 7.14293C10.6796 7.35257 10.9629 7.63596 11.1726 7.99312C11.39 8.35027 11.4987 8.74625 11.4987 9.18105V11.5336ZM24.0185 11.2192C23.6614 11.4288 23.2693 11.5336 22.8422 11.5336H20.5013V9.18105C20.5013 8.74625 20.6061 8.35027 20.8158 7.99312C21.0332 7.63596 21.3166 7.35257 21.666 7.14293C22.0231 6.92553 22.4152 6.81683 22.8422 6.81683C23.2693 6.81683 23.6614 6.92553 24.0185 7.14293C24.3757 7.35257 24.6591 7.63596 24.8687 7.99312C25.0784 8.35027 25.1832 8.74625 25.1832 9.18105C25.1832 9.60808 25.0784 10.0002 24.8687 10.3573C24.6591 10.7145 24.3757 11.0018 24.0185 11.2192ZM18.6845 18.7544H13.3155V13.2689H18.6845V18.7544ZM7.98147 20.7925C8.33863 20.5828 8.73072 20.478 9.15775 20.478H11.4987V22.8306C11.4987 23.2576 11.39 23.6497 11.1726 24.0069C10.9629 24.364 10.6796 24.6474 10.3224 24.8571C9.973 25.0745 9.58479 25.1832 9.15775 25.1832C8.73072 25.1832 8.33863 25.0745 7.98147 24.8571C7.63208 24.6474 7.34869 24.364 7.13129 24.0069C6.92165 23.6497 6.81683 23.2576 6.81683 22.8306C6.81683 22.3958 6.92165 21.9998 7.13129 21.6427C7.34869 21.2855 7.63208 21.0021 7.98147 20.7925ZM20.5013 20.478H22.8422C23.2693 20.478 23.6614 20.5828 24.0185 20.7925C24.3757 21.0021 24.6591 21.2855 24.8687 21.6427C25.0784 21.9998 25.1832 22.3958 25.1832 22.8306C25.1832 23.2576 25.0784 23.6497 24.8687 24.0069C24.6591 24.364 24.3757 24.6474 24.0185 24.8571C23.6614 25.0745 23.2693 25.1832 22.8422 25.1832C22.4152 25.1832 22.0231 25.0745 21.666 24.8571C21.3166 24.6474 21.0332 24.364 20.8158 24.0069C20.6061 23.6497 20.5013 23.2576 20.5013 22.8306V20.478Z" fill="#007AFF"/>
          </svg>
          サンプル
        </a>
        <nav className="c-pc-nav">
          <ul className="o-cluster">
            <li><a className="c-content-l u-txt-weight-m c-pc-nav__link" href="#">トップ</a></li>
            <li><a className="c-content-l u-txt-weight-m c-pc-nav__link" href="#">会社情報</a></li>
            <li><a className="c-content-l u-txt-weight-m c-pc-nav__link" href="#">お知らせ</a></li>
            <li><a className="c-content-l u-txt-weight-m c-pc-nav__link" href="#">ブログ</a></li>
            <li><a className="c-content-l u-txt-weight-m c-pc-nav__link" href="#">お問い合わせ</a></li>
          </ul>
        </nav>
        <button type="button" className="o-box o-box--button o-box--square-button o-box--menu-btn is-open">
          <span className="c-menu-bars"></span>
        </button>
      </header>
      <div id="sidebar" className="c-sidebar">
        <div className="c-sidebar__header">
          <button type="button" className="o-box o-box--button o-box--square-button o-box--menu-btn is-open">
            <span className="c-menu-bars"></span>
          </button>
        </div>
        <nav className="c-gnav">
          <ul>
            <li className="c-gnav-item"><a className="c-content-l u-txt-weight-m c-gnav-link" href="#">トップ</a></li>
            <li className="c-gnav-item"><a className="c-content-l u-txt-weight-m c-gnav-link" href="#">会社情報</a></li>
            <li className="c-gnav-item"><a className="c-content-l u-txt-weight-m c-gnav-link" href="#">お知らせ</a></li>
            <li className="c-gnav-item"><a className="c-content-l u-txt-weight-m c-gnav-link" href="#">ブログ</a></li>
            <li className="c-gnav-item"><a className="c-content-l u-txt-weight-m c-gnav-link" href="#">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
      <div className="c-sidebar-bg"></div>
      <main>
        <div className="o-imposter-parent">
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
          <div className="o-imposter o-cover">
            <h1 className="o-cover__middle o-stack o-stack--l">
              <span className="c-display-2xl c-hero u-txt-weight-b u-font-en-cond">Hello, World!</span>
              <span className="c-display-xl c-hero-bottom u-txt-weight-b u-font-en-cond">Tagline</span>
            </h1>
          </div>
        </div>
        <div className="o-center u-bg-white u-pt-l u-pb-l">
          <div className="o-sidebar">
            <div className="o-sidebar__narrow">
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
            </div>
            <div className="o-sidebar__wide">
              <h2 className="c-sec-heading">つまらないから先生もそんな事を急に思い立った</h2>
              <p className="c-content-l">その理由を明らかに意識した時には、決してその愛の生温い事を証拠立てる訳には行かなかった。先生の死に対する想像的な悲哀が、ちょっと用があって心持よく勉強ができたので、彼が折角積み上げた過去を蹴散らしたつもりで得意だったのでしょう。私は立とうとしたのは突然でないと自覚していたのです。</p>
              <div className="u-txt-right">
                <a href="#" className="o-box o-box--button o-box--rect-button">私たちについて</a>
              </div>
            </div>
          </div>
        </div>
        <div className="o-center o-center--content">
          <h2 className="c-sec-heading u-txt-center u-txt-weight-m">お知らせ</h2>
          <NewsList />
          <div className="u-txt-center u-mt-l u-mb-xl">
            <a href="#" className="o-box o-box--button o-box--rect-button">お知らせ一覧</a>
          </div>
        </div>
        <div className="o-center u-bg-secondary u-pt-xs u-pb-2xl">
          <h2 className="c-sec-heading u-txt-center u-txt-weight-m">弊社の特徴</h2>
          <ul className="o-switcher">
            <li className="o-stack o-stack--l">
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
              <dl className="o-stack o-stack--m">
                <dt className="c-display-2xs u-txt-weight-b u-txt-brand u-txt-center">特徴その1</dt>
                <dd className="c-content-l">だから私は私の方を向いた。</dd>
              </dl>
            </li>
            <li className="o-stack o-stack--l">
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
              <dl className="o-stack o-stack--m">
                <dt className="c-display-2xs u-txt-weight-b u-txt-brand u-txt-center">特徴その2</dt>
                <dd className="c-content-l">だから私は私の方を向いた。</dd>
              </dl>
            </li>
            <li className="o-stack o-stack--l">
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
              <dl className="o-stack o-stack--m">
                <dt className="c-display-2xs u-txt-weight-b u-txt-brand u-txt-center">特徴その3</dt>
                <dd className="c-content-l">だから私は私の方を向いた。</dd>
              </dl>
            </li>
          </ul>
        </div>
        <div className="o-center">
          <h2 className="c-sec-heading u-txt-center u-txt-weight-m">新着ブログ</h2>
          <BlogList />
          <div className="u-txt-center u-mt-l u-mb-xl">
            <a href="#" className="o-box o-box--button o-box--rect-button">ブログ一覧</a>
          </div>
        </div>
      </main>
      <div className="o-center">
        <NotFound />
      </div>
      <nav className="o-center u-mt-xl u-mb-xl">
        <BreadCrumb />
      </nav>
      <div className="o-center">
        <NewsArchive />
      </div>
      <nav className="o-center u-mt-m u-mb-m" aria-label="Pagination">
        <Pager />
      </nav>
      <nav className="o-center u-mt-xl u-mb-xl">
        <BreadCrumb />
      </nav>
      <div className="o-center">
        <Company />
      </div>
      <nav className="o-center u-mt-xl u-mb-xl">
        <BreadCrumb />
      </nav>
      <div className="o-center">
        <Inquiry />
      </div>
      <nav className="o-center u-mt-xl u-mb-xl">
        <BreadCrumb />
      </nav>
      <div className="o-center">
        <Terms />
      </div>
      <nav className="o-center u-mt-xl u-mb-xl">
        <BreadCrumb />
      </nav>
      <div className="o-center">
        <PrivacyPolicy />
      </div>
      <nav className="o-center u-mt-xl u-mb-xl">
        <BreadCrumb />
      </nav>
      <div className="o-center">
        <BlogArchive />
      </div>
      <nav className="o-center u-mt-m u-mb-m" aria-label="Pagination">
        <Pager />
      </nav>
      <nav className="o-center u-mt-xl u-mb-xl">
        <BreadCrumb />
      </nav>
      <div className="o-center">
        <BlogArchiveVar />
      </div>
      <nav className="o-center u-mt-m u-mb-m" aria-label="Pagination">
        <Pager />
      </nav>
      <nav className="o-center u-mt-xl u-mb-xl">
        <BreadCrumb />
      </nav>
      <NewsSingle />
      <nav className="o-center u-mt-xl u-mb-xl">
        <BreadCrumb />
      </nav>
        <BlogSingle />
      <nav className="o-center u-mt-xl u-mb-xl">
        <BreadCrumb />
      </nav>
      <div className="o-box o-center o-box--cta">
        <h2 className="c-sec-heading">お問い合わせ</h2>
        <p className="c-content-l u-txt-center">ご相談・ご質問は、こちらからお気軽にお問い合わせください。</p>
        <div className="o-stack o-stack--s">
          <a href="#" className="o-icon-parent o-icon-parent--text-center c-display-l" target="_blank" rel="noopener">
            <IconPhone />
            <span className="u-font-en-con u-txt-weight-b">000-0000-0000</span>
          </a>
          <span className="c-suppl-l u-txt-center">営業時間 平日 09:00~19:00</span>
          <a href="#" className="o-box o-box--button o-box--rect-button o-icon-parent u-block-center u-mt-m">
            <IconMail />
            メールでお問い合わせ
          </a>
        </div>
      </div>
      <footer className="o-center c-footer u-pb-xl">
        <div className="o-sidebar u-mb-m">
          <div className="o-stack o-stack--m o-sidebar__footLeft">
            <h3 className="c-qui-heading u-txt-weight-m">メルマガ登録</h3>
            <p className="c-content-m">お知らせやニュースレターを不定期にお届けしています。<br />この機会に、登録していきませんか？</p>
            <form className="c-oneline-form" action="#">
              <input type="text" className="o-box o-box--input o-box--full-wide" placeholder="例)info@examples.com" />
              <button type="submit" className="o-box o-box--button o-box--rect-button">登録</button>
            </form>
            <ul className="o-cluster">
              <li>
                <a className="c-content-m" href="#">会社概要</a>
              </li>
              <li>
                <a className="c-content-m" href="#">サイト規約</a>
              </li>
              <li>
                <a className="c-content-m" href="#">プライバシーポリシー</a>
              </li>
            </ul>
          </div>
          <div className="o-sidebar__footRight">
            <div className="o-stack o-stack--l">
              <a href="#" className="o-icon-parent o-icon-parent--center c-display-l u-txt-weight-m o-icon-parent--foot-logo">
                <svg className="o-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M32 0H0V32H32V0ZM9.15775 13.2922H11.4987V18.7311H9.15775C8.39686 18.7311 7.70196 18.9135 7.07305 19.2785C6.44415 19.6434 5.93948 20.1364 5.55903 20.7575C5.18634 21.3787 5 22.0736 5 22.8422C5 23.6109 5.18634 24.3097 5.55903 24.9386C5.93948 25.5753 6.44415 26.0799 7.07305 26.4526C7.70196 26.8253 8.39686 27.0116 9.15775 27.0116C9.92641 27.0116 10.6252 26.8253 11.2541 26.4526C11.883 26.0799 12.3838 25.5753 12.7565 24.9386C13.1292 24.3097 13.3155 23.6109 13.3155 22.8422V20.513H18.6845V22.8422C18.6845 23.6109 18.8708 24.3097 19.2435 24.9386C19.624 25.5753 20.1286 26.0799 20.7575 26.4526C21.3864 26.8253 22.0813 27.0116 22.8422 27.0116C23.6109 27.0116 24.3097 26.8253 24.9386 26.4526C25.5675 26.0799 26.0683 25.5753 26.441 24.9386C26.8137 24.3097 27 23.6109 27 22.8422C27 22.0736 26.8137 21.3787 26.441 20.7575C26.0683 20.1364 25.5675 19.6434 24.9386 19.2785C24.3097 18.9135 23.6109 18.7311 22.8422 18.7311H20.5013V13.2922H22.8422C23.6109 13.2922 24.3097 13.1098 24.9386 12.7448C25.5675 12.3799 26.0683 11.8869 26.441 11.2657C26.8137 10.6446 27 9.94971 27 9.18105C27 8.41239 26.8137 7.71361 26.441 7.0847C26.0683 6.44803 25.5675 5.94336 24.9386 5.57067C24.3097 5.19022 23.6109 5 22.8422 5C22.0813 5 21.3864 5.19022 20.7575 5.57067C20.1286 5.94336 19.624 6.44803 19.2435 7.0847C18.8708 7.71361 18.6845 8.41239 18.6845 9.18105V11.5103H13.3155V9.18105C13.3155 8.41239 13.1292 7.71361 12.7565 7.0847C12.3838 6.44803 11.883 5.94336 11.2541 5.57067C10.6252 5.19022 9.92641 5 9.15775 5C8.39686 5 7.70196 5.19022 7.07305 5.57067C6.44415 5.94336 5.93948 6.44803 5.55903 7.0847C5.18634 7.71361 5 8.41239 5 9.18105C5 9.94971 5.18634 10.6446 5.55903 11.2657C5.93948 11.8869 6.44415 12.3799 7.07305 12.7448C7.70196 13.1098 8.39686 13.2922 9.15775 13.2922ZM11.4987 11.5336H9.15775C8.73072 11.5336 8.33863 11.4288 7.98147 11.2192C7.63208 11.0018 7.34869 10.7145 7.13129 10.3573C6.92165 10.0002 6.81683 9.60808 6.81683 9.18105C6.81683 8.74625 6.92165 8.35027 7.13129 7.99312C7.34869 7.63596 7.63208 7.35257 7.98147 7.14293C8.33863 6.92553 8.73072 6.81683 9.15775 6.81683C9.58479 6.81683 9.973 6.92553 10.3224 7.14293C10.6796 7.35257 10.9629 7.63596 11.1726 7.99312C11.39 8.35027 11.4987 8.74625 11.4987 9.18105V11.5336ZM24.0185 11.2192C23.6614 11.4288 23.2693 11.5336 22.8422 11.5336H20.5013V9.18105C20.5013 8.74625 20.6061 8.35027 20.8158 7.99312C21.0332 7.63596 21.3166 7.35257 21.666 7.14293C22.0231 6.92553 22.4152 6.81683 22.8422 6.81683C23.2693 6.81683 23.6614 6.92553 24.0185 7.14293C24.3757 7.35257 24.6591 7.63596 24.8687 7.99312C25.0784 8.35027 25.1832 8.74625 25.1832 9.18105C25.1832 9.60808 25.0784 10.0002 24.8687 10.3573C24.6591 10.7145 24.3757 11.0018 24.0185 11.2192ZM18.6845 18.7544H13.3155V13.2689H18.6845V18.7544ZM7.98147 20.7925C8.33863 20.5828 8.73072 20.478 9.15775 20.478H11.4987V22.8306C11.4987 23.2576 11.39 23.6497 11.1726 24.0069C10.9629 24.364 10.6796 24.6474 10.3224 24.8571C9.973 25.0745 9.58479 25.1832 9.15775 25.1832C8.73072 25.1832 8.33863 25.0745 7.98147 24.8571C7.63208 24.6474 7.34869 24.364 7.13129 24.0069C6.92165 23.6497 6.81683 23.2576 6.81683 22.8306C6.81683 22.3958 6.92165 21.9998 7.13129 21.6427C7.34869 21.2855 7.63208 21.0021 7.98147 20.7925ZM20.5013 20.478H22.8422C23.2693 20.478 23.6614 20.5828 24.0185 20.7925C24.3757 21.0021 24.6591 21.2855 24.8687 21.6427C25.0784 21.9998 25.1832 22.3958 25.1832 22.8306C25.1832 23.2576 25.0784 23.6497 24.8687 24.0069C24.6591 24.364 24.3757 24.6474 24.0185 24.8571C23.6614 25.0745 23.2693 25.1832 22.8422 25.1832C22.4152 25.1832 22.0231 25.0745 21.666 24.8571C21.3166 24.6474 21.0332 24.364 20.8158 24.0069C20.6061 23.6497 20.5013 23.2576 20.5013 22.8306V20.478Z" fill="#007AFF"/>
                </svg>
                サンプル
              </a>
              <div className="c-content-m">〒530-0011<br />大阪府大阪市北区大深町3-1<br />グランフロント大阪</div>
            </div>
            <h3 className="c-ter-heading u-txt-weight-b u-font-en-con">Follow Us</h3>
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
            </div>
          </div>
        </div>
        <span className="c-suppl-m u-font-en">©︎ exapmles.com</span>
      </footer>
    </>
  );
}

export default App;
