import Todo from "../../../server/models/todo";
import dbConnect from "../../../server/utils/dbConnect";
dbConnect();

export default async function handler(req, res) {
  const { method, query } = req;

  //   delete todo
  if (method === "DELETE") {
    await Todo.findByIdAndDelete(query.todoId);
    const todos = await Todo.find({});
    return res.status(200).json({ todos, message: "succeeded" });
  }
}
