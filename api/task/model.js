// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = () => {
  return db.select("t.*", "p.project_name", "p.project_description")
  .from('tasks as t')
  .leftJoin("projects as p", "t.project_id", "=", "p.project_id")
}

const getById = (task_id) => {
    return db('tasks').where('task_id', task_id).first()
  }

const create = async(task) => {
    const [task_id] = await db('tasks').insert(task)
    return getById(task_id)
}

module.exports = {
    getAll,
    getById,
    create,
  }