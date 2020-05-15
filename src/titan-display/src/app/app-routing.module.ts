import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalmComponent } from './calm/calm.component';
import { WeeksComponent } from './weeks/weeks.component';

const routes: Routes = [
  {
    path: 'weeks',
    component: WeeksComponent
  },
  {
    path: "**",
    component: CalmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
