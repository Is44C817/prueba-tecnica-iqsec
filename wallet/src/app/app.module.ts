import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { MaskCardNumberPipe } from './pipes/mask-card-number.pipe';
import { FormComponent } from './components/form/form.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    MaskCardNumberPipe,
    FormComponent,
    CarruselComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
