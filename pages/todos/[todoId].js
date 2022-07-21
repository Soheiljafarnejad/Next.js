import axios from "axios";
import { useState } from "react";
import TodoForm from "../../components/TodoForm";
import { useRouter } from "next/router";
import { getOneTodo } from "../api/todos/[todoId]";
const TodoId = ({ todo }) => {
  const [formValue, setFormValue] = useState({ title: todo.title, description: todo.description });
  const router = useRouter();

  const addHandler = (e) => {
    e.preventDefault();
    const body = { title: formValue.title, description: formValue.description, id: todo._id };
    axios
      .patch(`/api/todos`, body)
      .then((res) => {
        console.log(res.data.todos);
        router.push("/todos");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-lg mx-auto my-4">
      <TodoForm formValue={formValue} setFormValue={setFormValue} submitHandler={addHandler} />
    </div>
  );
};

export default TodoId;

export async function getServerSideProps(context) {
  const { query } = context;
  let todo = await getOneTodo(query);
  todo = JSON.parse(JSON.stringify(todo));
  return {
    props: { todo: todo },
  };
}
