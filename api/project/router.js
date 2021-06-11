// build your `/api/projects` router here
// build your `/api/resources` router here
const router = require('express').Router()

const Project = require('./model')

router.get('/',  (req, res, next) => {
  Project.getAll()
  .then((projects) => {
    projects.map(item => {
      item.project_completed ? item.project_completed = true : item.project_completed = false
            return item
        })
        res.status(200).json(projects);
    })
  .catch(err =>{
    next(err)
  })
})


router.post('/', async (req, res, next) => {
  Project.create(req.body)
  .then(project=>{
      project.project_completed ? project.project_completed = true : project.project_completed = false
      res.status(201).json(project);
  })
  .catch(err=>{
    next(err)
  })
})


module.exports = router