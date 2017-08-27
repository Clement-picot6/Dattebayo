import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service'
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
	id:any;
	listing:any;
	imageUrl:any;


  constructor(private firebaService: FirebaseService, private router: Router, private route: ActivatedRoute) { }

   ngOnInit() {
  	// Get ID
  	this.id = this.route.snapshot.params['id'];

  	this.firebaService.getListingDetails(this.id).subscribe(listing =>{
  		this.listing = listing;
  		console.log(listing);

  	// @TODO - Storage Ref

  	});
  }

}
