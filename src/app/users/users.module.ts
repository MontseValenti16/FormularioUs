import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
