import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  itemsCollection !: AngularFirestoreCollection<any>;
  dataImg !: Observable<any[]>;
  
  constructor(private firestore : AngularFirestore) {
  }

  guardarObj(foto : any){
    this.firestore.collection('datosImagen').doc(foto.id.toString()).set(foto,{merge:true});
  }

  traerCosas(tipo : string){
    this.itemsCollection = this.firestore.collection<any>('datosImagen',ref => ref.where('tipo','==',tipo));
    return this.dataImg = this.itemsCollection.valueChanges();
  }

  actualizarObj(atributo : any, id: any){    
    this.firestore.collection('datosImagen').doc(id).set(atributo,{merge:true});
  }

  traerMisFotos(mail:string){
    this.itemsCollection = this.firestore.collection<any>('datosImagen',ref => ref.where('email','==',mail));
    return this.dataImg = this.itemsCollection.valueChanges();
  }
}