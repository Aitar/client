import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentsPagePage } from './comments-page.page';

const routes: Routes = [
  {
    path: ':textId',
    component: CommentsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsPagePageRoutingModule {}
