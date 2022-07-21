import Link from "next/link";
const Header = () => {
  return (
    <header className="shadow bg-slate-100 p-4 flex items-center justify-between">
      <h1 className="self-center items-center">TodoList App using Next.js , TailwindCss</h1>
      <Link href="/">
        <a>Go To Home</a>
      </Link>
    </header>
  );
};

export default Header;
