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
        setData(res.data.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {data.length > 0 ? (
        data.map((item) => {
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
