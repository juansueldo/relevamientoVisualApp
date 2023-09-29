import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionComponent } from 'src/app/components/navegacion/navegacion.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavegacionComponent],
  imports: [
    CommonModule,    
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports:[NavegacionComponent]
})
export class SharedModule { }