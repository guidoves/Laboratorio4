import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgModel } from '@angular/forms';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
