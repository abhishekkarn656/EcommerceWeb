import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { HttpClientModule } from '@angular/common/http';
import { UserStorageService } from './Services/auth/storage/user-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    DemoAngularMaterialModule,
    RouterLink,
    HttpClientModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'EcommerceWeb';
  isCustomerLoggedIn:boolean=UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn:boolean=UserStorageService.isAdminLoggedIn();
  constructor(private router:Router){

  }
  ngOnInit():void{
    this.router.events.subscribe(event=>{
this.isCustomerLoggedIn=UserStorageService.isCustomerLoggedIn();
this.isAdminLoggedIn=UserStorageService.isAdminLoggedIn();
    })
  }
  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
}
