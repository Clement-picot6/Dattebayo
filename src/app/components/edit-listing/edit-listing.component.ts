import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {

  constructor(private firebaService: FirebaseService, private router: Router, private route: ActivatedRoute) { }
	id:any;
	title:any;
	date:any;
	genre:any;
	type:any;
	seasons:any;
	synopsis:any;
	trailer:any;
	image:any;
	productor:string;


  ngOnInit() {
  	this.id = this.route.snapshot.params['id'];

  	this.firebaService.getListingDetails(this.id).subscribe(listing => {
  		this.title = listing.title;
  		this.date = listing.date;
  		this.genre = listing.genre;
  		this.type = listing.type;
  		this.productor = listing.productor;
  		this.seasons = listing.seasons;
  		this.synopsis = listing.synopsis;
  		this.trailer = listing.trailer;
  		this.image = listing.image;
  	});
  }

  	onEditSubmit() {
  		let listing = {
  			title: this.title,
  			date: this.date,
  			genre: this.genre,
  			type: this.type,
  			productor: this.productor,
  			seaons: this.seasons,
  			synopsis: this.synopsis,
  			trailer: this.trailer,
  			image: this.image,
  		}

  		this.firebaService.updateListing(this.id, listing);

  		this.router.navigate(['/listings']);
  	}
}
