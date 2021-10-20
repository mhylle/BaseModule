import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Diagnose} from './model/diagnose.model';

/**
 * The diagnosis service is responsible for retrieving diagnoses. The service does not support creation of diagnoses.
 * It is possible to get either all diagnoses or a single diagnose.
 */
@Injectable({
  providedIn: 'root'
})
export class DiagnoseService {

  /**
   * url of the service
   * @private
   */
  private readonly rootUrl: string = 'diagnoses';

  /**
   * Constructor
   * @param http for the http calls
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Retrieve all diagnoses
   * @return an {Observable} of {Diagnose[]}
   */
  get diagnoses(): Observable<Diagnose[]> {
    return this.http.get<Diagnose[]>(`${environment.baseUrl}/${this.rootUrl}`);
  }

  /**
   * Retrieve a single diagnose based on an id.
   * @param diagnoseId {number} the id of the diagnose to fetch.
   */
  getDiagnose(diagnoseId: number): Observable<Diagnose> {
    return this.http.get<Diagnose>(`${environment.baseUrl}/${this.rootUrl}/${diagnoseId}`);
  }
}
