import { todos } from "../../../data/Todos";
export default function handler(req, res) {
  return res.status(200).json({ todos });
}
