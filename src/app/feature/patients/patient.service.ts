import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from './model/patient.model';
import {environment} from '../../../environments/environment';

/**
 * Service for handling patient communication to the backend.
 */
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly rootUrl: string = 'patients';

  constructor(private http: HttpClient) {
  }

  /**
   * Retrieve all patients.
   * @return an {Observable} of {Patient[]}
   */
  get patients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.baseUrl}/${this.rootUrl}`);
  }

  /**
   * Retrieve a specific patient based on an id.
   * @param id the id of the patient to retrieve
   * @return an {Observable} of {Patient}
   */
  getPatient(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${environment.baseUrl}/${this.rootUrl}/${id}`);
  }

  /**
   * Update a specific patient. It is assumed that the patient data given is the data to update with.
   * @param patient the patient to update.
   */
  update(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${environment.baseUrl}/${this.rootUrl}/${patient.id}`, patient);
  }
}
