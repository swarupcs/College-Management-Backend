import { studentRepository } from "../repository/index.js";

const getAllStudents = async () => {
  try {
    return await studentRepository.findAll();
  } catch (error) {
    console.error("Error fetching all students:", error);
    throw new Error("Could not fetch students.");
  }
};

const getStudentById = async (id) => {
  try {
    const student = await studentRepository.findById(id);
    if (!student) {
      throw new Error("Student not found.");
    }
    return student;
  } catch (error) {
    console.error(`Error fetching student with ID ${id}:`, error);
    throw new Error("Could not fetch student.");
  }
};

const createStudent = async (data) => {
  try {
    return await studentRepository.create(data);
  } catch (error) {
    console.error("Error creating student:", error);
    throw new Error("Could not create student.");
  }
};

const createMultipleStudents = async (students) => {
  try {
    return await studentRepository.createMany(students);
  } catch (error) {
    console.error("Error inserting multiple students:", error);
    throw new Error("Could not insert students.");
  }
};

const updateStudent = async (id, data) => {
  try {
    const updatedStudent = await studentRepository.update(id, data);
    if (!updatedStudent) {
      throw new Error("Student not found for update.");
    }
    return updatedStudent;
  } catch (error) {
    console.error(`Error updating student with ID ${id}:`, error);
    throw new Error("Could not update student.");
  }
};

const deleteStudent = async (id) => {
  try {
    const deletedStudent = await studentRepository.remove(id);
    if (!deletedStudent) {
      throw new Error("Student not found for deletion.");
    }
    return deletedStudent;
  } catch (error) {
    console.error(`Error deleting student with ID ${id}:`, error);
    throw new Error("Could not delete student.");
  }
};

// Exporting all functions as an object
const studentService = {
  getAllStudents,
  getStudentById,
  createStudent,
  createMultipleStudents,
  updateStudent,
  deleteStudent,
};

export default studentService;
