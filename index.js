const port = process.env.PORT || '3000';
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
let num = 0;


app.get('/:id', (req, res) => {
  if(req.params?.id) {
    num = Number(req.params.id);
  }
  res.json({success: num})
})

app.get('/', (req, res) => {
  res.json({success: num})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
