import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {ListclientComponent} from './listclient/listclient.component';
import {ListCommandesComponent} from './list-commandes/list-commandes.component';
import {ProduitComponent} from './produit/produit.component';
import {ProduitdetailsComponent} from './produitdetails/produitdetails.component';
import {CommandedetailsComponent} from './commandedetails/commandedetails.component';
import {RegistrationComponent} from './registration/registration.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'Main', component: LayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'accueil', component: AccueilComponent},
      {path: 'listclient', component: ListclientComponent},
      {path: 'listcommandes', component: ListCommandesComponent},
      {path: 'produit/:id', component: ProduitComponent},
      {path: 'produit', component: ProduitComponent},
      {path: 'produitdetails', component: ProduitdetailsComponent},
      {path: 'commandedetails', component: CommandedetailsComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
