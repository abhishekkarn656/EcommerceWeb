// import { Injectable } from '@angular/core';

// const TOKEN='ecom-token';
// const USER='ecom-user';
// @Injectable({
//   providedIn: 'root'
// })
// export class UserStorageService {
//   saveToken(token: string) {
//     if(typeof window !== 'undefined'){
//          window.localStorage.removeItem(TOKEN);
//         window.localStorage.setItem(TOKEN,token);}
//   }

//   constructor() { }
//   // public saveToken(token:string):void{
//   //   if(typeof window!=='undefined'){
//   //   window.localStorage.removeItem(TOKEN);
//   //   window.localStorage.setItem(TOKEN,token);}
//   // }


//   public saveUser(user:Object):void{
//     if(typeof window!=='undefined'){
//     window.localStorage.removeItem(USER);
//     window.localStorage.setItem(USER,JSON.stringify(user));}
//   }


//   static getToken(): any {
//     return typeof window!=='undefined'?localStorage.getItem(TOKEN):null;
//   }
  
//   static getUser(): any {
//     // if (typeof window !== 'undefined') {
//     //   const userString = localStorage.getItem(USER);
//     //   if (userString) {
//     //     try {
//     //       return JSON.parse(userString);
//     //     } catch (e) {
//     //       console.error('Error parsing user from localStorage', e);
//     //       return null;
//     //     }
//     //   }
//     localStorage.getItem(USER);
   
//   }
  
//   static getUserId():string{
//     const user= this.getUser();
//     if(user==null){
//       return '';
//     }
//     return user.getUserId;
//   }

//   static getUserRole():string{
//     const user= this.getUser();
//     if(user==null){
//       return '';
//     }
//     const parsedUser = JSON.parse(user);
//     return parsedUser.role || '';
//   }

//   static isAdminLoggedIn():boolean{
//     const token =this.getToken();
//     if(token==null){
//       return false;
//   }
//   const roll:string=this.getUserRole();
//   return roll=='ADMIN';
// }

// static isCustomerLoggedIn():boolean{
//   const token =this.getToken();
//   if(token==null){
//     return false;
// }
// const roll:string=this.getUserRole();
// return roll=='CUSTOMER';
// }

// static signOut():void{
//   if(typeof window!='undefined'){
//   window.localStorage.removeItem(TOKEN);
//   window.localStorage.removeItem(USER);}
// }
//       // private isBrowser(): boolean {
//     //   // return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
//     // }
// }
import { Injectable } from '@angular/core';

const TOKEN = 'ecom-token';
const USER = 'ecom-user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  // Save the token to localStorage
  saveToken(token: string): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.setItem(TOKEN, token);
    }
  }

  // Save the user to localStorage
  public saveUser(user: Object): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(USER);
      window.localStorage.setItem(USER, JSON.stringify(user));
    }
  }

  // Get the token from localStorage
  static getToken(): string | null {
    return typeof window !== 'undefined' ? window.localStorage.getItem(TOKEN) : null;
  }

  // Get the user from localStorage
  static getUser(): any {
    if (typeof window !== 'undefined') {
      const userString = window.localStorage.getItem(USER);
      if (userString) {
        try {
          return JSON.parse(userString);
        } catch (e) {
          console.error('Error parsing user from localStorage', e);
          return null;
        }
      }
    }
    return null;
  }

  // Get the user ID from the user object
  static getUserId(): string {
    const user = this.getUser();
    return user ? user.userId || '' : '';
  }

  // Get the user's role from the user object
  static getUserRole(): string {
    const user = this.getUser();
    return user ? user.role || '' : '';
  }

  // Check if an admin is logged in
  static isAdminLoggedIn(): boolean {
    const token = this.getToken();
    if (token === null) {
      return false;
    }
    const role: string = this.getUserRole();
    return role === 'ADMIN';
  }

  // Check if a customer is logged in
  static isCustomerLoggedIn(): boolean {
    const token = this.getToken();
    if (token === null) {
      return false;
    }
    const role: string = this.getUserRole();
    return role === 'CUSTOMER';
  }

  // Sign out the user by removing the token and user from localStorage
  static signOut(): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.removeItem(USER);
    }
  }
}
