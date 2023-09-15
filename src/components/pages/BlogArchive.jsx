import { PageHeading } from "../PageHeading";
import { BlogCard } from "../BlogCard";

export const BlogArchive = () => {
  return (
    <>
      <PageHeading pageTitle='ブログ一覧' />
        <ul className="o-grid o-grid--tri">
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
