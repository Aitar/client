import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfPageRoutingModule } from './self-routing.module';

import { SelfPage } from './self.page';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SelfPageRoutingModule,
        NgZorroAntdMobileModule,
    ],
  declarations: [SelfPage]
})
export class SelfPageModule {}
