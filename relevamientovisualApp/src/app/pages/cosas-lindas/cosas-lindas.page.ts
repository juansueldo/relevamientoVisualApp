import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-cosas-lindas',
  templateUrl: './cosas-lindas.page.html',
  styleUrls: ['./cosas-lindas.page.scss'],
})
export class CosasLindasPage implements OnInit {
  cargando : boolean = true;
  cosasLindas : any = [];
  
  constructor(private img : ImagenService,private db : DbService,public auth : AuthService, private router: Router) { 
    this.db.traerCosas('lindas').subscribe(res => {
      console.log(res);
      this.cosasLindas = res.sort(function(a, b) {
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
    await this.img.subirImagen('lindas');
  }

  cambiarLike(foto : any,signo : string){
    this.cargando = true
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
  logout(){
    this.auth.logout();
    
    this.router.navigateByUrl("/login");
  }

}