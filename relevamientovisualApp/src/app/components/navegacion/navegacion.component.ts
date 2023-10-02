import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss'],
})
export class NavegacionComponent  implements OnInit {
  @Input() tabActual : string = 'home';
  userLogged : any;

  constructor(public auth : AuthService) { 
   // this.auth.getUserLogged().subscribe(user =>{      
      //this.userLogged = user      
    //})
  }

  ngOnInit() {}

}