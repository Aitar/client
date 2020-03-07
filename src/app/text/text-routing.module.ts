import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextPage } from './text.page';

const routes: Routes = [
  {
    path: '',
    component: TextPage
  },
  {
    path: 'comments-page',
    loadChildren: () => import('./comments-page/comments-page.module').then( m => m.CommentsPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextPageRoutingModule {}
