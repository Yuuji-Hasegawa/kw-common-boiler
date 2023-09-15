import { PageHeading } from "../PageHeading";
import { BlogCard } from "../BlogCard";

export const BlogArchiveVar = () => {
  return (
    <>
      <PageHeading pageTitle='ブログ一覧' />
      <ul className="o-grid o-grid--quart">
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
        </ul>
    </>
  );
};
