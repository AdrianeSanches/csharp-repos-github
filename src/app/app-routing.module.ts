import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PullRequestComponent } from './pages/pull-request/pull-request.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pullRequest', component: PullRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
