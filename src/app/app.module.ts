import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddquestionComponent } from './admin/addquestion/addquestion.component';
import { RemovequestionComponent } from './admin/removequestion/removequestion.component';
import { DisplayquestionComponent } from './admin/displayquestion/displayquestion.component';

@NgModule({
  declarations: [
    AppComponent,
    AddquestionComponent,
    RemovequestionComponent,
    DisplayquestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
