import chai from 'chai';

const expect = chai.expect;

import StudentService from './student.service.js';
import MongoClient from '../mongodb/mongoClient.js';

const studentService = new StudentService();
const mongoClient = new MongoClient();
mongoClient.connect();

const studentInfo = {
  rollNumber: 2,
  firstName: "Chetan",
  lastName: "Kapadane",
  class: 12,
  parentContact: 1234567890,
}

describe('StudentService', () => {
  describe('StudentService.createStudent', () => {
    it('expect to return status 500', (done) => {
      studentService.createStudent({})
        .then((result) => {
          expect(result.status).to.eql(500);
          done();
        });
    });

    it('expect to return status 200', (done) => {
      studentService.createStudent({ studentInfo }).then((result) => {
        expect(result.status).to.eql(200);
        done();
      })
    });
  });

  describe('StudentService.students', () => {
    it('expect to return available student list', (done) => {
      studentService.students({}).then((result) => {
        expect(result.length).to.gte(1);
        done();
      })
    });
  });

  describe('StudentService.updateStudent', () => {
    it('expect to return status 500', (done) => {
      studentService.updateStudent({})
        .then((result) => {
          expect(result.status).to.eql(500);
          done();
        })
    });

    it('expect to return status 200', (done) => {
      studentService.updateStudent({
        rollNumber: studentInfo.rollNumber,
        updateInfo: { firstName: 'Chetan Gopal' },
      }).then((result) => {
        expect(result.status).to.eql(200);
        done();
      })
    });
  });

  describe('StudentService.removeStudent', () => {
    it('expect to return status 500', (done) => {
      studentService.removeStudent({})
        .then((result) => {
          expect(result.status).to.eql(500);
          done();
        })
    });

    it('expect to return status 200', (done) => {
      studentService.removeStudent({
        rollNumber: studentInfo.rollNumber,
      })
        .then((result) => {
          expect(result.status).to.eql(200);
          done();
        })
    });
  });
});