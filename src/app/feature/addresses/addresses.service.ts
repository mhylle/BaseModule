import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Address} from './model/address.model';
import {catchError} from 'rxjs/operators';

/**
 * The addresses service is responsible for retrieving addresses. The service does not support creation of addresses.
 * It is possible to get either all addresses or a single address.
 */
@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  private readonly rootUrl: string = 'address';

  constructor(private http: HttpClient) {
  }

  /**
   * Retrieve all Addresses
   * @return an {Observable} of {Address[]}
   */
  get addresses(): Observable<Address[]> {
    return this.http.get<Address[]>(`${environment.baseUrl}/${this.rootUrl}`)
      .pipe(
        catchError((error: any) => throwError(error.json())));
  }

  /**
   * Retrieve an address based on it's id
   * @param id  the id of the [Address] to retrieve.
   */
  getAddress(id: string): Observable<Address> {
    return this.http.get<Address>(`${environment.baseUrl}/${this.rootUrl}/${id}`).pipe(
      catchError((error: any) => throwError(error.json())));
  }
}
