import mongoose, { Schema } from "mongoose";


// --- User Blueprint (Schema) ---
const userSchema = new Schema({
    // Their unique name
    username: { type: String, required: true, unique: true },
    // Their email
    email: { type: String, required: true, unique: true },
    // Their secret password (you'll secure this later!)
    password: { type: String, required: true },
    // First name
    firstName: String,
    // Last name
    lastName: String
});

// Now, we turn these blueprints into actual models
export const User = mongoose.model('User', userSchema);