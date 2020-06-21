import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  rollNumber: Number,
  firstName: String,
  lastName: String,
  class: Number,
  parentContact: Number,
}, { collection: 'student', timestamps: true });

export const Student = mongoose.model('StudentSchema', studentSchema);
