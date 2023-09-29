import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { getStorage, ref, uploadString } from "firebase/storage";
import { AuthService } from './auth.service';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  url!:Observable<string | null>
  
  constructor(private storage : AngularFireStorage, private auth : AuthService,private db : DbService) { }

  async subirImagen(tipo:string){
    let date = new Date();
    let id = date.getTime();
    
    const foto : any = {
      id,
      tipo,
      path:"",
      email:this.auth.getUserLogged.toString(),
      hora:`${date.getHours()}:${date.getMinutes()}`,
      fecha:`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,
      likes:[],
      nombre:''
    }
    
    
    const nuevaFoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100,
      webUseInput: true
    })
    

    let nombre = `${foto.email}-${id}`;
    
    foto.nombre = nombre;

    const storage = getStorage();

    const storageRef = ref(storage,nombre);

    const imageRef = this.storage.ref(`${nombre}`);

    // const uploadTask = await imageRef.putString(nuevaFoto.dataUrl!,'data_url').then(()=>{
    //   imageRef.getDownloadURL().subscribe(path =>{
    //     foto.path = path;
    //     this.db.guardarObj(foto);
    //   })
    // });

    // console.log(uploadTask);
    const uploadTask = await imageRef.putString(nuevaFoto.dataUrl!, 'data_url');
    const downloadUrl = await imageRef.getDownloadURL().toPromise();

    //console.log(downloadUrl);
    foto.path = downloadUrl;

    this.db.guardarObj(foto);    
    
    return true;
  }

  guardarImagen(archivo:any,path:string){
    const task = this.storage.upload(path, archivo);
  }

  descargarImagen(urlImg:any){
    const ref = this.storage.ref(urlImg);
    return this.url = ref.getDownloadURL();
  }
}