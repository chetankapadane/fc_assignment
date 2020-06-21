
import chai from 'chai';

const expect = chai.expect;

import AddressService from './address.service.js';
import MongoClient from '../mongodb/mongoClient.js';

const addressService = new AddressService();
const mongoClient = new MongoClient();
mongoClient.connect();

const addressInfo = {
  _id: "5eef1b3d0a8beb5df8af03a5",
  rollNo: 2,
  state: "MH",
  district: "Pune",
  pin: 411027,
  houseName: "LiveLaugh",
  houseNumber: 1,
  landmark: "Future Tree"
}

describe('addressService', () => {
  describe('addressService.addAddress', () => {
    it('expect to return status 500', (done) => {
      addressService.addAddress({})
        .then((result) => {
          expect(result.status).to.eql(500);
          done();
        });
    });

    it('expect to return status 200', (done) => {
      addressService.addAddress({ addressInfo }).then((result) => {
        expect(result.status).to.eql(200);
        done();
      })
    });
  });

  describe('addressService.addresses', () => {
    it('expect to return available student list', (done) => {
      addressService.addresses({}).then((result) => {
        expect(result.length).to.gte(1);
        done();
      })
    });
  });

  describe('addressService.updateAddress', () => {
    it('expect to return status 500', (done) => {
      addressService.updateAddress({})
        .then((result) => {
          expect(result.status).to.eql(500);
          done();
        })
    });

    it('expect to return status 200', (done) => {
      addressService.updateAddress({
        id: addressInfo._id,
        updatedAddress: { houseName: 'LiveLaugh New' },
      }).then((result) => {
        expect(result.status).to.eql(200);
        done();
      })
    });
  });

  describe('addressService.removeAddress', () => {
    it('expect to return status 500', (done) => {
      addressService.removeAddress({})
        .then((result) => {
          expect(result.status).to.eql(500);
          done();
        })
    });

    it('expect to return status 200', (done) => {
      addressService.removeAddress({
        _id: addressInfo._id,
      })
        .then((result) => {
          expect(result.status).to.eql(200);
          done();
        })
    });
  });
});