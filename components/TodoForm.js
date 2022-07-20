import axios from "axios";
import { useState } from "react";

const TodoForm = ({ data, setData }) => {
  const [form, setForm] = useState({ title: "", description: "" });

  const addHandler = (e) => {
    e.preventDefault();
    const body = { title: form.title, description: form.description };
    axios
      .post(`/api/todos`, body)
      .then((res) => {
        setData(res.data.todos);
        setForm({ title: "", description: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={addHandler}>
      <input className="w-full mb-2" placeholder="title..." name="title" onChange={changeHandler} value={form.title} />
      <textarea
        rows={4}
        className="w-full mb-3"
        placeholder="description..."
        name="description"
        onChange={changeHandler}
        value={form.description}
      />
      <button className="!bg-blue-600 !text-white w-full" type="submit">
        add Todo
      </button>
    </form>
  );
};

export default TodoForm;
