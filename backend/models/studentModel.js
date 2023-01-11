import mongoose from "mongoose";
const schema = mongoose.Schema;


const studentSchema = new schema({
  name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  }
});

export const Student = mongoose.model('students', studentSchema);
