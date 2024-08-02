import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { MaskCardNumberPipe } from './pipes/mask-card-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    MaskCardNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
