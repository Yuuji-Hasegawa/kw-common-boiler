import { BlogMedia } from "./BlogMedia";

export const LastList = () => {
  return (
    <>
      <h3 className="c-sec-heading">新着記事</h3>
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
