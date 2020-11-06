import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTestComponent } from './components/first-test/first-test.component';
import { SecondTestComponent } from './components/second-test/second-test.component';
import { UserModule } from './modules/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstTestComponent,
    SecondTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
