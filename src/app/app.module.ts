import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

// Nouveaux modules pour la db
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

// Nouveau AuthProviders & AuthMethods
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { FlashMessagesModule } from 'angular2-flash-messages/module';

import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';




// peut être enlever le 's' du listing's'/:id

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'listings', component:ListingsComponent},
  {path:'add-listing', component:AddListingComponent},
  {path: 'listings/:id', component:ListingComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddListingComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlashMessagesModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
