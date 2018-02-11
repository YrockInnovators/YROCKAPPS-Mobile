import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from './modal';
import { GdriveprovidersProvider } from '../../providers/gdriveproviders/gdrive-providers';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
  ],
})
export class ModalPageModule {}
