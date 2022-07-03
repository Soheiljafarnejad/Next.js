import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log(router.query);
  return <h1>this is post page - query:{router.query.postId}</h1>;
};

export default Post;
