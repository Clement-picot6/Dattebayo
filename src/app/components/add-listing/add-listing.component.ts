import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service'
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase'

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})


export class AddListingComponent implements OnInit {
	title:any;
	date:any;
	genre:any;
	type:any;
	seasons:any;
	synopsis:any;
	trailer:any;
	image:any;
	productor:any;


  constructor(
  	private firebaseService: FirebaseService,
  	private router: Router
  	) { }

  ngOnInit() {
  }


  onAddSubmit() {
  	let listing = {
  		title: this.title,
  		date: this.date,
  		genre: this.genre,
  		type: this.type,
  		seasons: this.seasons,
  		synopsis: this.synopsis,
  		trailer: this.trailer,
  		productor: this.productor,
  	}

  	this.firebaseService.addListing(listing);

  	this.router.navigate(['listings']);
  }
}

