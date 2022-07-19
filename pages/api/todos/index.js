import dbConnect from "../../../server/utils/dbConnect";
import Todo from "../../../server/models/todo";

dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    // const newTodo = {
    //   title: req.body.title,
    //   description: req.body.description,
    //   id: new Date(),
    // };
    // todos.push(newTodo);
    // return res.status(200).json({ todos, message: "succeeded" });
  } else if (req.method === "GET") {
    const todos = await Todo.find({});
    return res.status(200).json({ todos });
  }
}
