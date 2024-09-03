import { NgModule } from '@angular/core'; // Import NgModule decorator
import { BrowserModule } from '@angular/platform-browser'; // Import BrowserModule (only in the root module)
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives like ngIf, ngFor, etc.
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import forms modules if using forms
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule if making HTTP requests

// Import your components

import { AdminRoutingModule } from './admin-routing.module';

// Import routing module (if any)

@NgModule({
  declarations: [], // Components, directives, and pipes
   imports:[ ReactiveFormsModule,
    AdminRoutingModule
  ],
  // Root component to bootstrap (only in the root module)
})
export class AdminModule { }
