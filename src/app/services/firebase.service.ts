import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';

@Injectable()
export class FirebaseService {
	listings: FirebaseListObservable<any[]>;
	listing: FirebaseObjectObservable<any>;


  constructor(private afData:AngularFireDatabase, public afMod: AngularFireModule) { }


  	getListings(){
		this.listings = this.afData.list('/listings') as FirebaseListObservable<Listing[]>
		return this.listings;
	}


	getListingDetails(id) {
		this.listing = this.afData.object('/listings/'+id) as FirebaseObjectObservable<Listing>
		return this.listing;
	}
}



interface Listing {
	$key?: string;
	title?: string;
	date?: string;
	synopsis?: string;
	productor?: string;
	genre?: string;
	type?: string;
	image?: string;
	trailer?: string;
	seasons?: string;
}