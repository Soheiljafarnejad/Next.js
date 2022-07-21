import axios from "axios";
import { useState } from "react";
import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";
import Link from "next/link";
import Todo from "../../server/models/todo";

export default function Home({ todos }) {
  const [data, setData] = useState(todos);
  const [formValue, setFormValue] = useState({ title: "", description: "" });

  const addHandler = (e) => {
    e.preventDefault();
    const body = { title: formValue.title, description: formValue.description };
    axios
      .post(`/api/todos`, body)
      .then((res) => {
        setData(res.data.todos);
        setFormValue({ title: "", description: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <main className="flex items-start justify-center gap-4 mt-12 px-4">
        <div className="w-2/3">
          <TodoList data={data} setData={setData} />
        </div>
        <div className="w-1/3">
          <TodoForm submitHandler={addHandler} formValue={formValue} setFormValue={setFormValue} />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  let todos = await Todo.find({});
  todos = JSON.parse(JSON.stringify(todos));

  return {
    props: {
      todos,
    },
  };
}
