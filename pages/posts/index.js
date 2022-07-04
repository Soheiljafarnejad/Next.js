import Link from "next/link";

const Posts = () => {
  return (
    <div>
      <h1>this is post dynamic pages</h1>
        <Link href="/posts/1">
          <a>go to posts-1 !</a>
        </Link>

        <Link href="/posts/2" replace>
          {/* replace => prop to prevent adding a new entry to history  */}
          <a>go to posts-2 !</a>
        </Link>

        <Link href="/">
          <a>go to Home page !</a>
        </Link>
    </div>
  );
};

export default Posts;
