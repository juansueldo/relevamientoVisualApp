import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficosPageRoutingModule } from './graficos-routing.module';

import { GraficosPage } from './graficos.page';
import { SharedModule } from 'src/app/modules/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficosPageRoutingModule,
    SharedModule
  ],
  declarations: [GraficosPage]
})
export class GraficosPageModule {}