import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  console.log(router.query);
  return <h1>this is catch all routes page {JSON.stringify(router.query.params)}</h1>;
};

export default Review;

//1. [...name] => catch all routes
//2. [[...name]] => optional catch all routes
