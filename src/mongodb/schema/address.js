import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  rollNo: Number,
  state: String,
  district: String,
  pin: Number,
  houseName: String,
  houseNumber: Number,
  landmark: String,
}, { timestamps: true, collection: 'address' });

export const Address = mongoose.model('AddressSchema', AddressSchema);
