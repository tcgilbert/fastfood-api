require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())



app.get('/', (req, res) => {
  res.send('you connected to the home route homie')
})

app.use('/fastfood', require('./controllers/fastFoodController'))
const PORT = process.env.PORT || 3000

// const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🔥LIVE FROM PORT ${PORT}🔥`)
})