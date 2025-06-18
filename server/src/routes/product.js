import { Router } from 'express'
import { Product } from '../model/product.js'
const ProductRoute = Router() 

ProductRoute.get('/products', async (req, res) => {
  const products = await Product.find()
  res.send(products)
})

ProductRoute.get('/products/:id', async (req, res) => {
  const products = await Product.findById(req.params.id)
  res.send(products)
})

ProductRoute.post('/products', (req, res) => {
    Product.create(req.body)
    res.send('Product Created Successfully!!')
})

ProductRoute.delete('/products/:id', async (req, res) => {
    await Product.findByIdandDelete(req.params.id)
    res.send('Product Deleted Successfully!!')
})

ProductRoute.put('/products/:id', async (req, res) => {
    await Product.findByIdandUpdate(req.params.id, req.body)
    res.send('Product Updated Successfully!!')
})

export default ProductRoute