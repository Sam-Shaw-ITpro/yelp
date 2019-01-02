import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FetchService } from './fetch.service';
import { FormsModule } from '@angular/forms';
import { OneplaceComponent } from './oneplace/oneplace.component';
import { ManyplacesComponent } from './manyplaces/manyplaces.component';

@NgModule({
  declarations: [
    AppComponent,
    OneplaceComponent,
    ManyplacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpClient, FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
