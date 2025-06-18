import { Router } from 'express'
import { User } from '../model/user.js'
const UserRoute = Router() 

UserRoute.get('/products', async (req, res) => {
  const users = await User.find()
  res.send(users)
})

UserRoute.get('/products/:id', async (req, res) => {
  const users = await User.findById(req.params.id)
  res.send(users)
})

UserRoute.post('/products', (req, res) => {
    User.create(req.body)
    res.send('Product Created Successfully!!')
})

UserRoute.delete('/products/:id', async (req, res) => {
    await User.findByIdandDelete(req.params.id)
    res.send('Product Deleted Successfully!!')
})

UserRoute.put('/products/:id', async (req, res) => {
    await User.findByIdandUpdate(req.params.id, req.body)
    res.send('Product Updated Successfully!!')
})

export default UserRoute