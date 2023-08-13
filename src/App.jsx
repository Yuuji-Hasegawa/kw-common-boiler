import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import "./styles/style.scss";
import { Pager } from "./components/pager.jsx";
import { NewsList } from "./components/NewsList.jsx";
import { Switch } from "./components/Switch.jsx";

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
