import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>this is Not Found page !</h1>
      <h2 className="bg-red-400">
        <Link href="/">
          <a>back to home page ?</a>
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
