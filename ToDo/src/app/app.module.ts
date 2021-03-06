import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TodoService } from './to-do/to-do.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input/text-input.component';
import { TextInputService } from './text-input/text-input.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoService,
    TextInputService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
