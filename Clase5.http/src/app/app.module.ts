import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


//Componentes
import { AppComponent } from './app.component';
import { PaisesComponent } from './components/paises/paises.component';

//Servicios
import {HttpService} from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
