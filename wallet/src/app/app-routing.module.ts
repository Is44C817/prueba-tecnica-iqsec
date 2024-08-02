import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FormComponent } from './components/form/form.component';
import { WalletComponent } from './components/wallet/wallet.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'carrusel', component: CarruselComponent },
  { path: 'wallet', component: WalletComponent },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
