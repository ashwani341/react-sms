import { Student } from "../models/studentModel.js";
import { createResult } from "../utils/createResult.js";

export const getStudents = async (req, res) => {
  try {

    const students = await Student.find();

    return res.status(200).json(createResult(false, students));

  } catch (error) {
    console.log(error);
    return res.status(500).json(createResult(error));
  }
};


export const postStudent = async (req, res) => {
  try {

    const student = {
      name: req.body.name,
      course: req.body.course
    };

    const result = await Student.create(student);

    return res.send(createResult(false, result));

  } catch (error) {
    console.log(error);
    return res.status(500).json(createResult(error));
  }
};

export const deleteStudent = async (req, res) => {
  try {

    const id = req.params.id;
    const student = await Student.findByIdAndDelete({ _id: id });
    // console.log("🚀 ~ file: studentController.js:41 ~ deleteStudent ~ student", student);
    res.status(200).json(createResult(false, student));

  } catch (error) {
    console.log(error);
    return res.status(500).json(createResult(error));
  }
};
