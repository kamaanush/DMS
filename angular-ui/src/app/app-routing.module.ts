import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { DashbordComponent } from './shared-component/dashbord/dashbord.component';


const routes: Routes = [
  { path: '', pathMatch: 'full',component: LoginComponent },
  { path: 'SignUpComponent', pathMatch: 'full',component: SignUpComponent },
  { path: 'ForgotPassword', pathMatch: 'full',component: ForgotPasswordComponent },
  { path: 'dashbord', pathMatch: 'full',component: DashbordComponent  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
