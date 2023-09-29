import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CosasLindasPageRoutingModule } from './cosas-lindas-routing.module';
import { CosasLindasPage } from './cosas-lindas.page';
import { SharedModule } from 'src/app/modules/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CosasLindasPageRoutingModule,
    SharedModule
  ],
  declarations: [CosasLindasPage]
})
export class CosasLindasPageModule {}