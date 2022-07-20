import { useState } from "react";
import { getOneTodo } from "../api/todos/[todoId]";
const TodoId = ({ todo }) => {
  return (
    <>
      <div>
        <p>{todo.title}</p>
        <p>{todo.description}</p>
      </div>
    </>
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
