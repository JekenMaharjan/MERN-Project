import express from 'express';
import  dbConnect  from './db/connect.js';
import  ProductRoute  from './routes/product.js'

const app = express()
const port = 4000

dbConnect()

app.use(express.json())
app.use(ProductRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
