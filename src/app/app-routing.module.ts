import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: NotFoundComponent },

  { path: '', redirectTo: "/profile", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
