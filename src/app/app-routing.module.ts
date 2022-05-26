import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CoursComponent } from './cours/cours.component';
import { LoginComponent } from './login/login.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [  
      {path : "cours", component : CoursComponent},
      {path : "topics/:id", component : TopicsComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
