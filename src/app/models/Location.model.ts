export interface Location {
  type: string;
  coordinates: [{ lat: number; long: number }];
  formattedAddress: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}
