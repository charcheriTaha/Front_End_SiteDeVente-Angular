import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { ListclientComponent } from './listclient/listclient.component';
import { ListCommandesComponent } from './list-commandes/list-commandes.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitdetailsComponent } from './produitdetails/produitdetails.component';
import {CommandedetailsComponent} from './commandedetails/commandedetails.component';
import { RegistrationComponent } from './registration/registration.component';
import {LoginService} from "./Services/login.service";
import {ProduitService} from "./Services/produit.service";
import {ClientService} from "./Services/client.service";
import {CommandeService} from "./Services/commande.service";
import {ShareddataService} from "./Services/shareddata.service";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AccueilComponent,
    LayoutComponent,
    ListclientComponent,
    ListCommandesComponent,
    ProduitComponent,
    ProduitdetailsComponent,
    CommandedetailsComponent,
    RegistrationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule


  ],
  providers: [LoginService,ProduitService,ClientService,CommandeService,ShareddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
