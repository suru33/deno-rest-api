import { AddressRequest } from "../models/Address.ts";
import AddressRepo from "../repositories/AddressRepo.ts";

export const create = async (addressRequest: AddressRequest) => {
  return await AddressRepo.create(addressRequest);
};