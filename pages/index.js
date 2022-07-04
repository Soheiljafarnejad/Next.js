import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Home = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/dashboard");
    //  replace => prop to prevent adding a new entry to history
    // router.replace("/dashboard");
  };

  return (
    <div>
      <h1>this is Home Page</h1>
      <Link href="/posts">
        <a>go to posts ?</a>
      </Link>
      <button onClick={clickHandler}>go to dashboard Page ?</button>
    </div>
  );
};

export default Home;
