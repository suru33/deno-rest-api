export interface AddressRequest {
  name?: string;
  line1: string;
  line2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country: string;
  lat?: number;
  lng?: number;
  extra?: object;
}

export class Address {
  id: number;
  uuid: string;
  name: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  lat: number;
  lng: number;
  extra: object;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: number, uuid: string, name: string, line1: string, line2: string,
              city: string, state: string, zipCode: string, country: string, lat: number,
              lng: number, extra: object, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.uuid = uuid;
    this.name = name;
    this.line1 = line1;
    this.line2 = line2;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.country = country;
    this.lat = lat;
    this.lng = lng;
    this.extra = extra;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  response(): object {
    return {
      uuid: this.uuid,
      name: this.name,
      line1: this.line1,
      line2: this.line2,
      city: this.city,
      state: this.state,
      zipCode: this.zipCode,
      country: this.country,
      lat: this.lat,
      lng: this.lng,
      extra: this.extra,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }
}