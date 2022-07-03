import { useRouter } from "next/router";
const CommentId = () => {
  const router = useRouter();
  const { commentId, blogId } = router.query;
  return (
    <h1>
      blog {blogId} in Comment {commentId}
    </h1>
  );
};

export default CommentId;
