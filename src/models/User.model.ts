import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  contactNumber: { type: String },
  // Add other fields as necessary
});

const User = mongoose.model('User', userSchema);
export default User;
