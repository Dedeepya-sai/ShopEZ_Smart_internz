import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    email: { type: String },
    usertype: { type: String }
});

const adminSchema = new mongoose.Schema({
    banner: { type: String },
    categories: { type: Array }
});

const productSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    mainImg: { type: String },
    carousel: { type: Array },
    sizes: { type: Array },
    category: { type: String },
    gender: { type: String },
    price: { type: Number },
    discount: { type: Number }
});

const orderSchema = new mongoose.Schema({
    userId: { type: String },
    name: { type: String },
    email: { type: String },
    mobile: { type: String },
    address: { type: String },
    pincode: { type: String },
    title: { type: String },
    description: { type: String },
    mainImg: { type: String },
    size: { type: String },
    quantity: { type: Number },
    price: { type: Number },
    discount: { type: Number },
    paymentMethod: { type: String },
    orderDate: { type: String },
    deliveryDate: { type: String },
    orderStatus: { type: String, default: 'order placed' }
});

const cartSchema = new mongoose.Schema({
    userId: { type: String },
    title: { type: String },
    description: { type: String },
    mainImg: { type: String },
    size: { type: String },
    quantity: { type: String },
    price: { type: Number },
    discount: { type: Number }
});

// ✅ Fixed names → singular model names
export const User = mongoose.model('User', userSchema);
export const Admin = mongoose.model('Admin', adminSchema);
export const Product = mongoose.model('Product', productSchema);
export const Orders = mongoose.model('Orders', orderSchema);
export const Cart = mongoose.model('Cart', cartSchema);
