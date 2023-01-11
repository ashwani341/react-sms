import express from 'express';
const router = express.Router();
import { deleteStudent, getStudents, postStudent } from '../controller/studentController.js';

router.route('/')
  .get(getStudents)
  .post(postStudent);

router.delete('/:id', deleteStudent);

export default router;
