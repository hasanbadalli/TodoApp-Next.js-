// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let tasks = [
  { id: 1, task: "Learn Next", completed: false },
  { id: 2, task: "Learn Node", completed: false },
  { id: 3, task: "Learn Express", completed: false },
  { id: 4, task: "Learn React", completed: false },
];

const getTasks = (res) => {
  res.status(200).json(tasks);
};

const addTask = (req, res) => {
  const { task } = req.body;
  const newTask = { id: tasks.length + 1, task, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const deleteTask = (req, res) => {
  const taskID = req.body.id;
  tasks = tasks.filter((task) => taskID != task.id);
  res.status(200).json({ message: "TASK DELETED" });
};

const updateTask = (req, res) => {
  const { id, completed } = req.body;
  tasks = tasks.map((todo) => (todo.id === id ? { ...todo, completed } : todo));
  res.status(200).json({ id, completed });
};

export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      return getTasks(res);
    case "POST":
      return addTask(req, res);
    case "PUT":
      return updateTask(req, res);
    case "DELETE":
      return deleteTask(req, res);
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} not allowed`);
  }
}
