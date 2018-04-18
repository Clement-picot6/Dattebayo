import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
	listings:any;
  id:any;
  listing:any;
  imageUrl:any;
  user:any;


  constructor(private firebaseService:FirebaseService, private firebaService: FirebaseService,public afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.firebaseService.getListings().subscribe(listings =>{
  		console.log(listings);
  		this.listings = listings;
  }

)
  }
}