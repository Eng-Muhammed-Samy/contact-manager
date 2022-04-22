import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { User } from "../interfaces/User";

@Injectable({
  providedIn:'root'
})

export class UserService{

  private  USER_URL = "https://jsonplaceholder.typicode.com/users"
  constructor(private http : HttpClient){}

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.USER_URL).pipe(
      catchError(this.handdlerror)
    )
  }
  private handdlerror(error : HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
       return throwError(()=> new Error('error occures in' + error.error.message))
    }else{
      return throwError(()=> new Error('error status : ' + error.status + " occured in " + error.error.message))
    }
  }
}
