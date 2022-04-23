import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Note } from "../interfaces/Note";

@Injectable({
  providedIn:'root'
})

export class PostsService{
  private POSTS_URL = "http://localhost:3000/posts"
  constructor(private http: HttpClient){}

  getUserPost(userId:number):Observable<Note[]>{
    return this.http.get<Note[]>(`${this.POSTS_URL}/?userId=${userId}`).pipe(
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
