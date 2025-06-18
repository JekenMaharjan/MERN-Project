import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const dbConnect = async () => {
// export async function dbConnect() {
    try{
        const res = await mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce');
        if(res) console.log("Connected to MongoDB server!")
    }catch(err){
        console.log(err)
    }
    
}

export default dbConnect