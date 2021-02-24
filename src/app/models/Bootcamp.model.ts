import { Location } from './Location.model';
export interface Bootcamp {
  location: Location;
  careers: string[];
  photo: string;
  housing: boolean;
  jobAssistance: boolean;
  jobGuarantee: boolean;
  acceptGi: boolean;
  _id: string;
  name: string;
  description: string;
  user: string;
  createdAt: string;
  slug: string;
  __v: number;
  id: string;
}

export interface BootcampFullResponse {
  success: boolean;
  data: Bootcamp[];
}
