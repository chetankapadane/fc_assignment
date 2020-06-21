import graphql from 'graphql';
import StudentService from '../services/student.service.js';
import AddressService from '../services/address.service.js';

const studentService = new StudentService();
const addressService = new AddressService();
// Require to enable EJS module loading in order to get rid of this
const { buildSchema } = graphql;

// common fields
const studentObj = `
  rollNumber: Int!
  firstName: String
  lastName: String
  class: Int
  parentContact: Int
`;

const addressObj = `
  _id: String
  state: String
  district: String
  pin: Int
  houseName: String
  houseNumber: Int
  landmark: String
`;

// Construct a schema, using GraphQL schema language
export const schema = buildSchema(`
  type Response {
    status: Int
    message: String
  }
  input StudentInfo {
    ${studentObj}
  }
  input UpdateInfo {
    firstName: String
    lastName: String
    class: Int
    parentContact: Int
  }
  type StudentDetails {
    ${studentObj}
    address: [AddressInfo]
  }
  input AddressDetails {
    rollNo: Int!
    ${addressObj}
  }
  type AddressInfo {
    rollNo: Int!
    ${addressObj}
  }
  input UpdatedAddress {
    state: String
    district: String
    pin: Int
    houseName: String
    houseNumber: String
    landmark: String
  }
  type Query {
    students(rollNumber: Int): [StudentDetails]
    addresses(rollNumber: Int): [AddressInfo]
  }
  type Mutation {
      createStudent(studentInfo: StudentInfo): Response
      updateStudent(rollNumber: Int!, updateInfo: UpdateInfo): Response
      removeStudent(rollNumber: Int!): Response
      addAddress(addressInfo: AddressDetails): Response
      updateAddress(id: String!, updatedAddress: UpdatedAddress): Response
      removeAddress(_id: String!): Response
  }
`);

// The root provides a resolver function for each API endpoint
export const resolver = {
  students: (...args) => {
    return studentService.students(args[0]);
  },
  addresses: (...args) => {
    return addressService.addresses(args[0]);
  },
  createStudent: (...args) => {
    return studentService.createStudent(args[0]);
  },
  updateStudent: (...args) => {
    return studentService.updateStudent(args[0]);
  },
  removeStudent: (...args) => {
    return studentService.removeStudent(args[0]);
  },
  addAddress: (...args) => {
    return addressService.addAddress(args[0]);
  },
  updateAddress: (...args) => {
    return addressService.updateAddress(args[0]);
  },
  removeAddress: (...args) => {
    return addressService.removeAddress(args[0]);
  },
};