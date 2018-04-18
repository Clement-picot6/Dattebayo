import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages/module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public flashMessage: FlashMessagesService) { 
  	this.user = afAuth.authState;

  }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if (this.afAuth.authState) {
      this.flashMessage.show('Content de te (re)voir! On espère que tu trouveras ton bonheur 😊', 
    {cssClass: 'alert-success', timeout: 3000});
    }
    
  }

  logout() {
    this.afAuth.auth.signOut();
    this.flashMessage.show('Vous avez bien été déconnecté. À bientôt :-)', 
    {cssClass: 'alert-danger', timeout: 3000});
  }

}


