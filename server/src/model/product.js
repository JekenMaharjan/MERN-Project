import mongoose, { Schema } from "mongoose";

// --- Product Blueprint (Schema) ---
const productSchema = new Schema({
    // What's its name?
    productName: { type: String, required: true },
    // How much does it cost?
    price: { type: Number, required: true },
    // A quick description
    description: String,
    // Picture of the product
    imageUrl: String,
    // How many do you have?
    stock: { type: Number, default: 0 }
});


// Now, we turn these blueprints into actual models
export const Product = mongoose.model('Product', productSchema);