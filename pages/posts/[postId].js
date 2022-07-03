import { useRouter } from "next/router";
import Link from "next/link";

const Post = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>this is post page - query: {router.query.postId}</h1>
      <h2>
        <Link href="/posts">
          <a>go to posts page !</a>
        </Link>
      </h2>
    </div>
  );
};

export default Post;
