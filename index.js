const port = process.env.PORT || '3000';
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.json({success: true})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
