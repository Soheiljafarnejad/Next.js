import { todos } from "../../../data/Todos";
export default function handler(req, res) {
  if (req.method === "POST") {
    const newTodo = {
      title: req.body.title,
      description: req.body.description,
      id: new Date(),
    };
    todos.push(newTodo);
    return res.status(200).json({ todos, message: "succeeded" });
  } else if (req.method === "GET") return res.status(200).json({ todos });
}
