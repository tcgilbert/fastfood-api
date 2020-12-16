const router = require('express').Router()
const models = require('../models')

// read all
router.get('/', (req, res) => {
  models.FastFood.find()
  .then((food) => {
    res.send(food)
    // res.staus(200).json({ food })
  })
  .catch((err) => res.send(err))
})

// read one
router.get('/:id', (req, res) => {
  models.FastFood.find({_id: req.params.id})
  .then((food) => {
    res.send(food)
    // res.staus(200).json({ food })
  })
  .catch((err) => res.send(err))
})

// create
router.post('/', (req, res) => {
  res.send('fast food create route')
})

// update
router.put('/:id', (req, res) => {
  res.send('fast food update route')
})

// delete
router.delete('/:id', (req, res) => {
  res.send('fast food delete route')
})

module.exports = router;