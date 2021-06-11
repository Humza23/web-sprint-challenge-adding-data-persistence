// build your `/api/resources` router here
const router = require('express').Router()

const Resource = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAll()
        res.json(resources)
      } catch (err) {
        next(err)
      }
})

router.post('/', async (req, res, next) => {
    try {
        const updated = await Resource.create(req.body)
        res.json(updated)
      } catch (err) {
        next(err)
      }
    });


module.exports = router