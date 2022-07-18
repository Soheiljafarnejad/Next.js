import Todo from "../components/Todo";

export default function Home() {
  return (
    <div>
      <header className="shadow bg-slate-100">
        <h1 className="p-4 text-center">TodoList App using Next.js , TailwindCss</h1>
      </header>
      <main className="flex items-center justify-center mt-12">
        <div className="w-full px-16">
          <Todo title="todo 1" />
          <Todo title="todo 2" />
          <Todo title="todo 3" />
        </div>
      </main>
    </div>
  );
}
