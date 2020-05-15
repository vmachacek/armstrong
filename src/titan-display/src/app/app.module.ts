import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeeksComponent } from './weeks/weeks.component';
import { CommonModule } from '@angular/common';
import { CalmComponent } from './calm/calm.component';

@NgModule({
  declarations: [
    AppComponent,
    WeeksComponent,
    CalmComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
