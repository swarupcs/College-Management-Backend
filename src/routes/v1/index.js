import express from "express";

import { pingController } from "../../controllers/ping-controller.js";

import {
  getAllStudents,
  getStudentById,
  createStudent,
  createMultipleStudents,
  updateStudent,
  deleteStudent,
} from "../../controllers/student-controller.js";


const router = express.Router();

router.get("/ping", pingController);
router.get("/getAllStudents", getAllStudents);
router.get("/:id", getStudentById);
router.post("/createStudent", createStudent);
router.post("/bulk", createMultipleStudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);


export default router;