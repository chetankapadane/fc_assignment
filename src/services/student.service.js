import * as StudentMethods from '../mongodb/methods/student.methods.js';

class StudentService {
    async students(args) {
        const response = { status: 500, message: 'Internal server error' };
        const { rollNumber } = args;

        const filter = {};
        if (rollNumber) {
            Object.assign(filter, { rollNumber });
        }

        return await StudentMethods.students(filter);
    }

    async createStudent(args) {
        const response = { status: 500, message: 'Internal server error' };

        const { studentInfo } = args;

        const result = await StudentMethods.createStudent(studentInfo);

        if (result) {
            response.status = 200;
            response.message = 'Record Added Successfully!';
        }

        return response;
    }

    async updateStudent(args) {
        const response = { status: 500, message: 'Internal server error' };
        const { rollNumber, updateInfo } = args;

        const result = await StudentMethods.updateStudent(rollNumber, updateInfo);

        if (result && result.nModified) {
            response.status = 200;
            response.message = 'Record Updated Successfully!';
        }
        return response;
    }

    async removeStudent(args) {
        const response = { status: 500, message: 'Internal server error' };

        if (!Object.keys(args).length) return response;
 
        const result = await StudentMethods.removeStudent(args);

        if (result && result.deletedCount) {
            response.status = 200;
            response.message = 'Record Removed Successfully!';
        }
        return response;
    }
}

export default StudentService;