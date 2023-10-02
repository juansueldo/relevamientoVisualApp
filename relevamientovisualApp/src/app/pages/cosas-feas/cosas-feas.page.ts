import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-cosas-feas',
  templateUrl: './cosas-feas.page.html',
  styleUrls: ['./cosas-feas.page.scss'],
})
export class CosasFeasPage implements OnInit {

  cargando : boolean = true;
  cosasFeas : any = []

  constructor(private img : ImagenService,private db : DbService,public auth : AuthService) { 
    this.db.traerCosas('feas').subscribe(res => {
      //console.log(res);
      this.cosasFeas = res.sort(function(a, b) {
        return b.id - a.id;
      });
      setTimeout(() => {
        this.cargando = false        
      }, 2000);
    })
  }

  ngOnInit() {
  }

  async nuevaFoto(){
    this.cargando = true;
    await this.img.subirImagen('feas').then((res) => {
      console.log(res);
     /* if(res){
        this.cargando = false
      }else{
        this.cargando = false
        console.log('error');        
      }*/
    });
  }

  cambiarLike(foto : any,signo : string){
    this.cargando = true;
    if(signo == '+'){
      //aca agrega el like
      foto.likes.push(this.auth.mailLogueado)
    }else if(signo == '-'){
      //aca le saca el like
      let indice = foto.likes.indexOf(this.auth.mailLogueado)
      foto.likes.splice(indice,1);
    }
    this.db.actualizarObj(foto,foto.id.toString())
  }

}