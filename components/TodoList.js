import axios from "axios";
import { useRouter } from "next/router";
import Todo from "./Todo";

const TodoList = ({ data, setData }) => {
  const router = useRouter();

  const deleteHandler = (e, id) => {
    e.stopPropagation();
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
          return (
            <div className="cursor-pointer" key={item._id} onClick={() => router.push(`/todos/${item._id}`)}>
              <Todo onDelete={(e) => deleteHandler(e, item._id)} key={item.id} todo={item} />
            </div>
          );
        })
      ) : (
        <p className="text-center">todo list is empty !</p>
      )}
    </>
  );
};

export default TodoList;
