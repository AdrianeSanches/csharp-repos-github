import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { RepositoryNameComponent } from './shared/components/repository-name/repository-name.component';
import { CardRepositoryComponent } from './shared/components/card-repository/card-repository.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PullRequestComponent } from './pages/pull-request/pull-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    RepositoryNameComponent,
    CardRepositoryComponent,
    HomeComponent,
    PullRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
