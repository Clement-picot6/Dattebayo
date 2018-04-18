import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase'

@Injectable()
export class FirebaseService {
	listings: FirebaseListObservable<any[]>;
	profile: FirebaseListObservable<any[]>;
	listing: FirebaseObjectObservable<any>;
	folder:any;
	selectedFile:any;


  constructor(private afData:AngularFireDatabase, public afMod: AngularFireModule) {
    	this.folder = 'listing-images';
    	this.listings = this.afData.list('/listings') as FirebaseListObservable<any[]>
    	this.profile = this.afData.list('/profile') as FirebaseListObservable<any[]>;
     }

  	getListings(){ 
		return this.listings;
	}

	getListingDetails(id) {
		this.listing = this.afData.object('/listings/'+id) as FirebaseObjectObservable<any>
		return this.listing;
	}
	


	addListing(listing: Listing) {
		let storageRef = firebase.storage().ref();
		for(this.selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
			let path = `/${this.folder}/${this.selectedFile.name}`;
			let iRef = storageRef.child(path);
			iRef.put(this.selectedFile).then((snapshot) => {
				listing.image = this.selectedFile.name;
				listing.path = path;
				return this.listings.push(listing);
			});
		}
	}

	updateListing(id, listing) {
		return this.listings.update(id, listing);
	}


	deleteListing(id) {
		return this.listings.remove(id);
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
	path?: string;
}