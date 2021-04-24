import { v4 } from "https://deno.land/std@0.95.0/uuid/mod.ts";
import { AddressRequest } from '../models/Address.ts';
import client from "../postgres.ts";


class AddressRepo {
  create(request: AddressRequest): any {
    const uuid = v4.generate();
    client.queryObject
        `INSERT INTO address (ad_uuid,
                     ad_name,
                     ad_line1,
                     ad_line2,
                     ad_city,
                     ad_state,
                     ad_zip_code,
                     ad_country,
                     ad_lat,
                     ad_lng,
                     ad_extra,
                     ad_updated_at)
        VALUES (${uuid}::uuid,
                ${request.name},
                ${request.line1},
                ${request.line2},
                ${request.city},
                ${request.state},
                ${request.zipCode},
                ${request.country},
                ${request.lat},
                ${request.lng}
                ${JSON.stringify(request.extra)},
                NOW())`;
    return uuid;
  }
}

// const addressRepo = new AddressRepo();

export default new AddressRepo();


// function createAddress(request: AddressRequest): any {
// }
//
// function updateAddress(request: AddressRequest): any {
// }
//
// function getAddress(uuid: string): any {
// }