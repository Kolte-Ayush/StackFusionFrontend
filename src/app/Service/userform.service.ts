import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const baseUrl = ' https://assingment-stackfusion.herokuapp.com/user-form';

@Injectable({
  providedIn: 'root'
})
export class UserformService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(baseUrl)
  }
  create(data: {name : string; email: string; date: string; phone_number: string; } ): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
