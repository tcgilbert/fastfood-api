const router = require('express').Router()
const models = require('../models')

// read all
router.get('/', (req, res) => {
  models.FastFood.find()
  .then((data) => {
    res.status(200).json({ data })
  })
  .catch((err) => res.send(err))
})

// read one
router.get('/:id', (req, res) => {
  models.FastFood.find({_id: req.params.id})
  .then((data) => {
    res.status(200).json({ data })
  })
  .catch((err) => res.send(err))
})

// create
router.post('/', (req, res) => {
  let newObj = {
    name: req.body.name,
    stores: req.body.stores,
    menuItems: req.body.menuItems,
    thomasScore: req.body.thomasScore
  }
  models.FastFood.create({newObj})
  .then((dbRes) => {
    res.send(`${dbRes} created`)
  })
  .catch((err) => res.send(err))
})


// delete
router.delete('/:id', (req, res) => {
  models.FastFood.deleteOne({_id: req.params.id})
  .then((dbRes) => {
    res.send(`${dbRes} deleted`)
  })
  .catch((err) => res.send(err))
})

module.exports = router;