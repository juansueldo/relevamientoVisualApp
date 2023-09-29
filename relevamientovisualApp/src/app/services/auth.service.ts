import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {getAuth, updateProfile} from "firebase/auth"; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userFirebase : any;
  toast;
  claveActual = '';
  emailActual = '';

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,

  ) { }

  //======= Autenticacion ========
  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  signinUp(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  updateUser(user: any){
    const auth = getAuth();
    return updateProfile(auth.currentUser, user)
  }
  logout(){
    return this.auth.signOut();
  }
  getUserLogged(){
    return this.auth.authState;
  }
}