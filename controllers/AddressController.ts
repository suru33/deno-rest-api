import { AddressRequest } from "../models/Address.ts";
import { create } from "../services/AddressService.ts";

export const createAddress = async ({request, response}: { request: any; response: any }) => {
  const addressRequest: AddressRequest = await request.body();
  const uuid = create(addressRequest);

  response.status = 201;
  response.body = {
    message: {
      'addressId': uuid
    }
  };
}