import {Diagnosis} from '../../diagnoses/model/diagnosis.model';

export interface Patient {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  diagnosis: Diagnosis | number;
}
