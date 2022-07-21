import dbConnect from "../../../server/utils/dbConnect";
import Todo from "../../../server/models/todo";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;
  const { title, description, isCompleted, id } = body;
  // add todo
  if (method === "POST") {
    await Todo.create({ title, description });
    const todos = await Todo.find({});
    return res.status(200).json({ todos, message: "add todo succeeded" });
  }

  // get todo
  else if (method === "GET") {
    const todos = await Todo.find({});
    return res.status(200).json({ todos, message: "get All todo succeeded" });
  }
  // Completed Todo
  else if (method === "PATCH") {
    if (isCompleted === "isCompleted") {
      const todo = await Todo.findById(id);
      todo.isCompleted = !todo.isCompleted;
      await todo.save();
    }
    // edit todo
    else {
      await Todo.findByIdAndUpdate(id, { title, description });
    }
    const todos = await Todo.find({});
    return res.status(200).json({ todos, message: "edit todo succeeded" });
  }
}
