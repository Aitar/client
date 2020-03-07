import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'self',
    loadChildren: () => import('./self/self.module').then( m => m.SelfPageModule)
  },
  {
    path: 'other',
    loadChildren: () => import('./other/other.module').then( m => m.OtherPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
