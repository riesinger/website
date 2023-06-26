import Link from "next/link";

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
};

let year = 0;

function PostLinkList({ posts }) {
  return (
    <ol className="m-0">
      {posts.map((post) => {
        const currentYear = new Date(post.date).getFullYear();
        let printYear = currentYear !== year;
        year = currentYear;

        return (
          <li key={post.slug} data-testid="article-item">
            {printYear ? (
              <h2 className="font-bold mt-10 mb-2 text-xl">{currentYear}</h2>
            ) : null}
            <Link href={`/posts/${post.slug}/`}>
              <div
                className="flex justify-start items-center h-14"
                data-testid="article-link"
              >
                <time className="text-sm text-gray-600 dark:text-gray-400 min-w-[6ch] mr-8">
                  {new Intl.DateTimeFormat("en-US", DATE_OPTIONS).format(
                    new Date(post.date)
                  )}
                </time>
                <h3 className="text-base font-normal text-gray-900 dark:text-gray-100">
                  {post.title}
                </h3>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export default PostLinkList;
