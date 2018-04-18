import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { SafePipe } from './safe.pipe';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
	id:any;
	listing:any;
	imageUrl:any;
  user:any;

  constructor(private firebaService: FirebaseService,public afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) { 
     this.user = JSON.parse(localStorage['firebase:authUser:AIzaSyBKJqZI4Yk4WbrvrJzUcH6vN99aQj6usDU:[DEFAULT]']);
        var admin = this.user.uid;
        console.log(admin);
  }

   ngOnInit() {
  	// Get ID


  	this.id = this.route.snapshot.params['id'];

  	this.firebaService.getListingDetails(this.id).subscribe(listing =>{
  		this.listing = listing;
  		console.log(listing);

  	let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child(listing.path);
    storageRef.child(listing.path).getDownloadURL().then(url => {
      this.imageUrl = url;
    }).catch((error => {
      console.log(error);
    }));

  	});
  }

    onDeleteClick() {
      this.firebaService.deleteListing(this.id);

      this.router.navigate(['/listings']);
    }
}
  