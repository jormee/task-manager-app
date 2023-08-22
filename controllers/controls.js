
const getAllTasks = (req, res) => {
  res.status(200).json({
    "message": "success"
  })
}

const createTask = (req, res) => {
  res.status(201).json({
    "message": "task created"
  })
}

const getTask = (req, res) => {
  res.status(200).json({
    "message": "task found",
    "id": req.params.id
  })
}

const updateTask = (req, res) => {
  res.status(200).json({
    "message": "task updated",
    "id": req.params.id
  })
}

const deleteTask = (req, res) => {
  res.status(200).json({
    "message": "task deleted",
    "id": req.params.id
  })
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
