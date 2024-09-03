import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, observable, Observable } from 'rxjs';
import { UserStorageService } from './storage/user-storage.service';
const BASIC_URL ="http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient, private userStorageService:UserStorageService) { 

  }
    register(signupRequest:any):Observable<any>{
      return this.http.post(BASIC_URL+'SIGN-UP',signupRequest)
    }

    login(username:string,password:string):any{
      const headers =new HttpHeaders().set('Content-Type','application/json')
      const body={username,password};
      return this.http.post(BASIC_URL+'authenticate',body,{headers,observe:'response'}).pipe(
        map((res)=>{
          console.log("header",res.headers);
          console.log("ffffdfgdg",res.body);
          const token =res.headers.get('authorization')?.substring(7); 
          console.log(token);
          
          const user = res.body;
          if(token && user){
            console.log("hyyyyyyyyyyyyyyyyyy");
            
            this.userStorageService.saveToken(token);
            console.log(this.userStorageService.saveToken(token))
            this.userStorageService.saveUser(user);
            return true;
          }
          else{
            return false;
          }
        })
      )
    
    }
  }

