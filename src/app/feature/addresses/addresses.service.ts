import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Address} from './model/address.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  private readonly rootUrl: string = 'address';

  constructor(private http: HttpClient) {
  }

  get addresses(): Observable<Address[]> {
    return this.http.get<Address[]>(`${environment.baseUrl}/${this.rootUrl}`)
      .pipe(
        catchError((error: any) => throwError(error.json())));
  }

  getAddress(id: string): Observable<Address> {
    return this.http.get<Address>(`${environment.baseUrl}/${this.rootUrl}/${id}`).pipe(
      catchError((error: any) => throwError(error.json())));
  }
}
