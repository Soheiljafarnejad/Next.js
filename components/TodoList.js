import axios from "axios";
import { useRouter } from "next/router";
import Todo from "./Todo";

const TodoList = ({ data, setData }) => {
  const router = useRouter();

  const deleteHandler = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then((res) => {
        console.log(res.data.todos);
        setData(res.data.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const completedHandler = (id) => {
    axios
      .patch(`/api/todos`, { id, isCompleted: "isCompleted" })
      .then((res) => {
        console.log(res.data.todos);
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
            <div key={item._id}>
              <Todo
                onCompleted={() => completedHandler(item._id)}
                onEdit={() => router.push(`/todos/${item._id}`)}
                onDelete={() => deleteHandler(item._id)}
                key={item.id}
                todo={item}
              />
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
