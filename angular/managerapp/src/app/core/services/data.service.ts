import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CustomerI } from '../models/customersTypeDef';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 private _url:string = "/api/customers" ;
  constructor(private http:HttpClient) { }
  
  
  getCustomersData():Observable<CustomerI[]>
  {
  return this.http.get<CustomerI[]>(this._url);
  }
}
