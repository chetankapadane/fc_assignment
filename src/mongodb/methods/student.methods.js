import { Student } from '../schema/students.js';

export const students = async filter => {
    return await Student.aggregate([
        {
            $lookup:
            {
                from: "address",
                localField: "rollNo",
                foreignField: "rollNumber",
                as: "address"
            }
        }
    ]);
}

export const createStudent = async document => {
    return await Student.create(document);
};

export const updateStudent = async (rollNumber, updatedDoc) => {
    return await Student.updateOne({ rollNumber }, { $set: updatedDoc });
}

export const removeStudent = async filter => {
    return await Student.deleteOne(filter);
}


