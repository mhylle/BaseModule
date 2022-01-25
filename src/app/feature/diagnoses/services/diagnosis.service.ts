import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Diagnosis} from '../model/diagnosis.model';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {
  private readonly rootUrl: string = 'diagnoses';

  constructor(private http: HttpClient) {
  }

  get diagnoses(): Observable<Diagnosis[]> {
    return this.http.get<Diagnosis[]>(`${environment.baseUrl}/${this.rootUrl}`);
  }

  getDiagnosis(diagnosis: number): Observable<Diagnosis> {
    return this.http.get<Diagnosis>(`${environment.baseUrl}/${this.rootUrl}/${diagnosis}`);
  }
}
