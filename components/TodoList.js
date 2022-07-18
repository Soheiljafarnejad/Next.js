import axios from "axios";
import Todo from "./Todo";

const TodoList = ({ data, setData }) => {
  const deleteHandler = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then((res) => {
        setData({ data: res.data.todos, error: "", loading: false });
      })
      .catch((error) => {
        setData({ data: [], loading: false, error: error });
      });
  };

  return (
    <>
      {data?.data.map((item) => {
        return <Todo onDelete={() => deleteHandler(item.id)} key={item.id} todo={item} />;
      })}
    </>
  );
};

export default TodoList;
