import axios from "axios";
import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
  const [data, setData] = useState({ data: [], loading: true, error: "" });

  useEffect(() => {
    axios
      .get("/api/todos")
      .then((res) => {
        setData({ data: res.data.todos, loading: false, error: "" });
      })
      .catch((error) => {
        setData({ data: [], loading: false, error: error });
      });
  }, []);

  if (data.loading) return <p>loading...</p>;

  if (data.error) {
    alert(data.error.message);
  }

  return (
    <div>
      <header className="shadow bg-slate-100">
        <h1 className="p-4 text-center">TodoList App using Next.js , TailwindCss</h1>
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
