import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

// Nouveaux modules pour la db
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

// Nouveau AuthProviders & AuthMethods
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { FlashMessagesModule } from 'angular2-flash-messages/module';

import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import { FilterPipe } from './components/listings/filter.pipe';
import { SafePipe } from './components/listing/safe.pipe';
import { GenderPipe } from './components/listings/gender.pipe';
import { IloveitPipe } from './components/listings/iloveit.pipe';





const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'listings', component:ListingsComponent},
  {path:'add-listing', component:AddListingComponent},
  {path: 'listings/:id', component:ListingComponent},
  {path: 'edit-listings/:id', component:EditListingComponent},
  {path: 'profile', component:ProfileComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddListingComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    EditListingComponent,
    ProfileComponent,
    FilterPipe,
    SafePipe,
    GenderPipe,
    IloveitPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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