import { BlogMedia } from "./BlogMedia";

export const RelatedList = () => {
  return (
    <>
      <h3 className="c-sec-heading">関連記事</h3>
      <ul className="o-stack o-stack--l">
            <li>
              <BlogMedia />
            </li>
            <li>
              <BlogMedia />
            </li>
            <li>
              <BlogMedia />
            </li>
            <li>
              <BlogMedia />
            </li>
            <li>
              <BlogMedia />
            </li>
      </ul>
    </>
  );
};
