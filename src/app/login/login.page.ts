import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController } from '@ionic/angular';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private afAuth: AngularFireAuth, private loader: LoadingController) { }

  ngOnInit() {
  }

  async loginTest() {
    await this.afAuth.signInWithPopup(new GoogleAuthProvider);

  }
}