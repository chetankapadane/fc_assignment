import { Address } from '../schema/address.js';

export const addresses = async filter => {
    return await Address.find(filter).lean();
}

export const addAddress = async document => {
    return await Address.create(document);
};

export const updateAddress = async (id, updatedDoc) => {
    return await Address.updateOne({ _id: id }, { $set: updatedDoc });
}

export const removeAddress = async filter => {
    return await Address.deleteOne(filter);
}


