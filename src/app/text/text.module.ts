import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextPageRoutingModule } from './text-routing.module';

import { TextPage } from './text.page';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TextPageRoutingModule,
        NgZorroAntdMobileModule
    ],
  declarations: [TextPage]
})
export class TextPageModule {}
