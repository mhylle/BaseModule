import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Diagnose} from './model/diagnose.model';

@Injectable({
  providedIn: 'root'
})
export class DiagnoseService {
  private readonly rootUrl: string = 'diagnoses';

  constructor(private http: HttpClient) {
  }

  get diagnoses(): Observable<Diagnose[]> {
    return this.http.get<Diagnose[]>(`${environment.baseUrl}/${this.rootUrl}`);
  }

  getDiagnose(diagnoseId: number): Observable<Diagnose> {
    return this.http.get<Diagnose>(`${environment.baseUrl}/${this.rootUrl}/${diagnoseId}`);
  }
}
