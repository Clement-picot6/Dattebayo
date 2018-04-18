import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import {NgForm} from '@angular/forms';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	profile:any;
	user: '';
	email: '';
	prenom: '';
	nom: '';
	bio: '';


    constructor(private firebaseService:FirebaseService, private firebaService: FirebaseService,public afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	let inputs = JSON.parse(localStorage.getItem('inputs'))
  	if(inputs != undefined){
  		this.user = inputs.user;
  		this.email = inputs.email;
  		this.prenom = inputs.prenom;
  		this.nom = inputs.nom;
  		this.bio = inputs.bio;

  	}

  }

  clicked(f: NgForm){
  	localStorage.setItem('inputs', JSON.stringify(f.value))
  	location.reload()
  }

}