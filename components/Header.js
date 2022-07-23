import Link from "next/link";
const Header = () => {
  return (
    <header className="shadow bg-slate-100 px-4 py-2 flex items-center justify-between">
      <h1 className="self-center items-center">TodoList</h1>
      <div className="flex items-center justify-between gap-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/todos">
          <a>Todos</a>
        </Link>
        <Link href="/sign_in">
          <a>sign in</a>
        </Link>
        <Link href="/sign_up">
          <a>sign up</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
