import * as AddressMethods from '../mongodb/methods/address.methods.js';

class AddressService {
    async addresses(args) {
        const response = { status: 500, message: 'Internal server error' };
        const { rollNumber } = args;

        const filter = {};
        if (rollNumber) {
            Object.assign(filter, { rollNumber });
        }

        return await AddressMethods.addresses(filter);
    }

    async addAddress(args) {
        const response = { status: 500, message: 'Internal server error' };

        if (!Object.keys(args).length) return response;

        const { addressInfo } = args;

        const result = await AddressMethods.addAddress(addressInfo);

        if (result) {
            response.status = 200;
            response.message = 'Address Added Successfully!';
        }

        return response;
    }

    async updateAddress(args) {
        const response = { status: 500, message: 'Internal server error' };

        if (!Object.keys(args).length) return response;

        const { id, updatedAddress } = args;

        const result = await AddressMethods.updateAddress(id, updatedAddress);

        if (result && result.nModified) {
            response.status = 200;
            response.message = 'Record Updated Successfully!';
        }
        return response;
    }

    async removeAddress(args) {
        const response = { status: 500, message: 'Internal server error' };

        if (!Object.keys(args).length) return response;

        const result = await AddressMethods.removeAddress(args);

        if (result && result.deletedCount) {
            response.status = 200;
            response.message = 'Address Removed Successfully!';
        }
        return response;
    }
}

export default AddressService;