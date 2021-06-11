// build your `/api/tasks` router here
const router = require('express').Router()

const Task = require('./model')

router.get('/', async (req, res, next) => {
  Task.getAll()
  .then((tasks) => {
    tasks.map(item => {
      item.task_completed ? item.task_completed = true : item.task_completed = false
            return item
        })
        res.status(200).json(tasks);
    })
  .catch(err =>{
    next(err)
  })
})

router.post('/', async (req, res, next) => {
  Task.create(req.body)
  .then(task=>{
      task.task_completed ? task.task_completed = true : task.task_completed = false
      res.status(201).json(task);
  })
  .catch(err=>{
    next(err)
  })
})
module.exports = router