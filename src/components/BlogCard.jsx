import { Thumb } from "./Thumb";
import { Date } from "./Date";
import { CatLabel } from "./CatLabel";
import { CardTitle } from "./CardTitle";

export const BlogCard = () => {
  return (
    <a href="#" className="o-box o-box--bg-fill o-box--blog-card o-stack">
      <Thumb />
      <footer className="o-box o-box--card-inner o-stack o-stack--m">
        <span className="o-cluster o-cluster--middle">
          <Date date='2023.00.00' />
          <CatLabel categoryName='category' />
        </span>
        <CardTitle contentTitle='サンプルタイトル' />
      </footer>
    </a>
  );
};
