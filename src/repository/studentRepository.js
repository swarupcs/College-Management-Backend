import Student from "../models/Students.js";

const findAll = async () => {
  try {
    return await Student.find();
  } catch (error) {
    console.error("Error fetching students:", error);
    throw new Error("Could not retrieve students.");
  }
};

const findById = async (id) => {
  try {
    const student = await Student.findById(id);
    if (!student) {
      throw new Error("Student not found.");
    }
    return student;
  } catch (error) {
    console.error(`Error finding student with ID ${id}:`, error);
    throw new Error("Could not retrieve student.");
  }
};

const create = async (data) => {
  try {
    return await Student.create(data);
  } catch (error) {
    console.error("Error creating student:", error);
    throw new Error("Could not create student.");
  }
};

const createMany = async (students) => {
  try {
    return await Student.insertMany(students);
  } catch (error) {
    console.error("Error inserting multiple students:", error);
    throw new Error("Could not insert students.");
  }
};

const update = async (id, data) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedStudent) {
      throw new Error("Student not found for update.");
    }
    return updatedStudent;
  } catch (error) {
    console.error(`Error updating student with ID ${id}:`, error);
    throw new Error("Could not update student.");
  }
};

const remove = async (id) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(id);
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
const studentRepository = {
  findAll,
  findById,
  create,
  createMany,
  update,
  remove,
};

export default studentRepository;
