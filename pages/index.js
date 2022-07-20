import Link from "next/link";

const Home = () => {
  return (
    <div className="p-2">
      <Link href="/todos">
        <a>Go to Todo List</a>
      </Link>
      <Link href="/api/todos">
        <a>Go to Api List</a>
      </Link>
    </div>
  );
};

export default Home;
