import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class emailValidatorService implements AsyncValidator{
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.baseUrl;

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
   const email = control.value;
   return this.compruebaEmail(email).pipe(
     map (resp => {
       if(resp.email != null){
          return {emailIndicado: true};
       }else{
        return null;
       }
     }),
     catchError (err => {
        return of(null);
     })
   );
  }

  //Método para comprobar email en BBDD
  compruebaEmail(email:string){
    const url = `${this.baseUrl}/auth/user?email=${email}`;
    return this.http.get<User>(url);
  }


}
