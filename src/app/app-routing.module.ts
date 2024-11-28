import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueuesComponent } from './Components/queues/queues.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path:'home', component:QueuesComponent , canActivate:  [authGuard] },
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'**', redirectTo:'home', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
