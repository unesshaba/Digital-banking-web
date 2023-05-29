import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  backendHost: string ="http://localhost:8083";
  constructor(private http:HttpClient) { }
  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backendHost+"/customers");
  }
  public searchCustomers(keyword :string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(this.backendHost+"/customers/search?keyword="+keyword);
  }
  public saveCustomers(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.backendHost+"/customers",customer );
  }
  public deleteCustomers(id:number){
    return this.http.delete(this.backendHost+"/customers/"+id);
  }
}
 