export default function handler(req, res) {
  return res.status(200).json({ todoId: req.query.todoId });
}
