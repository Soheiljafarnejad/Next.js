import Todo from "../../../server/models/todo";
import dbConnect from "../../../server/utils/dbConnect";
dbConnect();

export default async function handler(req, res) {
  const { method, query } = req;

  if (method === "GET") {
    const todo = await getOneTodo(query);
    return res.status(200).json({ todo, message: "get one todo succeeded" });
  }

  //   delete todo
  else if (method === "DELETE") {
    await Todo.findByIdAndDelete(query.todoId);
    const todos = await Todo.find({});
    return res.status(200).json({ todos, message: "delete todo succeeded" });
  }
}

export async function getOneTodo(query) {
  const todo = await Todo.findById(query.todoId);
  return todo;
}
