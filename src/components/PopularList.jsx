import { BlogMedia } from "./BlogMedia";

export const PopularList = () => {
  return (
    <>
      <h3 className="c-sec-heading">よく読まれている記事</h3>
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
