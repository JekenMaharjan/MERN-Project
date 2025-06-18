import { Router } from 'express'
import { Student } from '../model/student.js'
const StudentRoute = Router() 

StudentRoute.get('/products', async (req, res) => {
  const students = await Student.find()
  res.send(students)
})

StudentRoute.get('/products/:id', async (req, res) => {
  const students = await Student.findById(req.params.id)
  res.send(students)
})

StudentRoute.post('/products', (req, res) => {
    Student.create(req.body)
    res.send('Product Created Successfully!!')
})

StudentRoute.delete('/products/:id', async (req, res) => {
    await Student.findByIdandDelete(req.params.id)
    res.send('Product Deleted Successfully!!')
})

StudentRoute.put('/products/:id', async (req, res) => {
    await Student.findByIdandUpdate(req.params.id, req.body)
    res.send('Product Updated Successfully!!')
})

export default StudentRoute