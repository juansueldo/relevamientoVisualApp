import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-mis-fotos',
  templateUrl: './mis-fotos.page.html',
  styleUrls: ['./mis-fotos.page.scss'],
})
export class MisFotosPage implements OnInit {

  cargando : boolean = true;
  misFotos : any = [];
  usuario : any = '';

  constructor(private auth : AuthService,private db : DbService, private router: Router) { 
    this.usuario = this.auth.getUserLogged;
    this.db.traerMisFotos(this.usuario).subscribe(data => {
      this.misFotos = data.sort(function(a,b){
        return b.id - a.id
      });
      setTimeout(() => {
        this.cargando = false        
      }, 2000);
    })
  }

  ngOnInit() {
  }
  logout(){
    this.auth.logout();
    
    this.router.navigateByUrl("/login");
  }

}