import dbConnect from "../../../server/utils/dbConnect";
import Todo from "../../../server/models/todo";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  // add todo
  if (method === "POST") {
    await Todo.create({ title: body.title, description: body.description });
    const todos = await Todo.find({});
    return res.status(200).json({ todos, message: "succeeded" });
  }

  // get todo
  else if (method === "GET") {
    const todos = await Todo.find({});
    return res.status(200).json({ todos });
  }
}
