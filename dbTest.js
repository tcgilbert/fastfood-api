require('dotenv').config()
const models = require('./models')

const tacoBell = new models.FastFood({
  name: "Zaxby's",
  stores: 900,
  menuItems: ["Wings n' Things", "Kicken Chicken Sandwich"],
  thomasScore: "9/10"
})

tacoBell.save();

models.FastFood.find({_id: '5fd9624993a880444d6d3ece'})
.then((food) => {
  console.log(food)
})
.catch((err) => res.send(err))