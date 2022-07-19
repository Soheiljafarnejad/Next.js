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
      {data.data.length > 0 ? (
        data.data.map((item) => {
          return <Todo onDelete={() => deleteHandler(item._id)} key={item.id} todo={item} />;
        })
      ) : (
        <p className="text-center">todo list is empty !</p>
      )}
    </>
  );
};

export default TodoList;
