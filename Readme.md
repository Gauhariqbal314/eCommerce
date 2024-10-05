This is Backend for eCommerce Application for my Project


















// User Model
const userSchema = {
  _id: ObjectId,
  username: String,
  email: String,
  password: String, // Hashed
  firstName: String,
  lastName: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  phoneNumber: String,
  createdAt: Date,
  updatedAt: Date
};

// Product Model
const productSchema = {
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  category: String,
  brand: String,
  sku: String,
  inventory: Number,
  images: [String], // Array of image URLs
  attributes: {
    // Flexible key-value pairs for product attributes
    color: String,
    size: String,
    weight: Number,
    // ... other attributes
  },
  createdAt: Date,
  updatedAt: Date
};

// Order Model
const orderSchema = {
  _id: ObjectId,
  userId: ObjectId, // Reference to User
  items: [
    {
      productId: ObjectId, // Reference to Product
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  status: String, // e.g., "pending", "shipped", "delivered"
  paymentMethod: String,
  paymentStatus: String,
  createdAt: Date,
  updatedAt: Date
};

// Category Model
const categorySchema = {
  _id: ObjectId,
  name: String,
  description: String,
  parentCategory: ObjectId, // Reference to parent category, if any
  createdAt: Date,
  updatedAt: Date
};

// Review Model
const reviewSchema = {
  _id: ObjectId,
  userId: ObjectId, // Reference to User
  productId: ObjectId, // Reference to Product
  rating: Number,
  comment: String,
  createdAt: Date,
  updatedAt: Date
};

// Cart Model
const cartSchema = {
  _id: ObjectId,
  userId: ObjectId, // Reference to User
  items: [
    {
      productId: ObjectId, // Reference to Product
      quantity: Number
    }
  ],
  createdAt: Date,
  updatedAt: Date
};