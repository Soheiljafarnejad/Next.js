import axios from "axios";
import { useEffect, useState } from "react";
import Todo from "../components/Todo";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/todos")
      .then((res) => {
        setLoading(false);
        setError("");
        setData(res.data.todos);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  if (error) return <p>error : {error}</p>;
  if (loading) return <p>loading...</p>;

  return (
    <div>
      <header className="shadow bg-slate-100">
        <h1 className="p-4 text-center">TodoList App using Next.js , TailwindCss</h1>
      </header>
      <main className="flex items-center justify-center mt-12">
        <div className="w-full px-16">
          {data.map((item) => {
            return <Todo key={item.id} title={item.title} />;
          })}
        </div>
      </main>
    </div>
  );
}
