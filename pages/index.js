import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/user">
        <a>UserList Page ?</a>
      </Link>
    </div>
  );
};

export default Home;
