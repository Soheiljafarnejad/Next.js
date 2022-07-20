import { useState } from "react";
import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";
import Link from "next/link";
import { getAllTodo } from "../api/todos";

export default function Home({ todos }) {
  const [data, setData] = useState(todos);

  return (
    <div>
      <header className="shadow bg-slate-100 p-4 flex items-center justify-between">
        <h1 className="self-center items-center">TodoList App using Next.js , TailwindCss</h1>
        <Link href="/">
          <a>Go To Home</a>
        </Link>
      </header>
      <main className="flex items-start justify-center gap-4 mt-12 px-4">
        <div className="w-2/3">
          <TodoList data={data} setData={setData} />
        </div>
        <div className="w-1/3">
          <TodoForm data={data} setData={setData} />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  let todos = await getAllTodo();
  todos = JSON.parse(JSON.stringify(todos));

  return {
    props: {
      todos,
    },
  };
}
