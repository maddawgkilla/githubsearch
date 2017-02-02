import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './components/profile.component';
import { GithubService } from './services/github.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ GithubService ]
})
export class AppModule { }
