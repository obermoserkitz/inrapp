import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth) { }

  loginByMail() {
    this.afAuth.signInWithEmailAndPassword('  @gmail.com', '123456');
  }
}
