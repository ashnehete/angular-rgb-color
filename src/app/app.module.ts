import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { RgbComponent } from './components/rgb.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, UserComponent, RgbComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
