import { useRouter } from "next/router";
import Link from "next/link";

const Post = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>this is post page - query: {router.query.postId}</h1>
      <Link href="/posts">
        <a>go to posts page !</a>
      </Link>
    </div>
  );
};

export default Post;
