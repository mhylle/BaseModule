import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly rootUrl: string = 'patients';

  constructor(private http: HttpClient) {
  }

  get patients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.baseUrl}/${this.rootUrl}`);
  }

  getPatient(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${environment.baseUrl}/${this.rootUrl}/${id}`);
  }

  update(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${environment.baseUrl}/${this.rootUrl}/${patient.id}`, patient);
  }
}
