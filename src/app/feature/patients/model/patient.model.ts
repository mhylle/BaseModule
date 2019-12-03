export interface Patient {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  diagnosis: id | number;
  address: string | null;
}
