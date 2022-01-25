import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Address} from '../model/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  private readonly rootUrl: string = 'address';

  constructor(private http: HttpClient) {
  }

  get addresses(): Observable<Address[]> {
    return this.http.get<Address[]>(`${environment.baseUrl}/${this.rootUrl}`);
  }

  getAddress(id: string): Observable<Address> {
    return this.http.get<Address>(`${environment.baseUrl}/${this.rootUrl}/${id}`);
  }
}
