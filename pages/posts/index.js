import Link from "next/link";

const Posts = () => {
  return (
    <div>
      <h1 className="text-red-400">this is post dynamic pages</h1>
      <h2>
        <Link href="/posts/1">
          <a>go to posts-1 !</a>
        </Link>
      </h2>

      <h2>
        <Link href="/posts/2" replace>
          {/* replace => prop to prevent adding a new entry to history  */}
          <a>go to posts-2 !</a>
        </Link>
      </h2>

      <h2>
        <Link href="/">
          <a>go to Home page !</a>
        </Link>
      </h2>
    </div>
  );
};

export default Posts;
