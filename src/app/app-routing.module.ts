import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RazasListComponent } from './entities/razas/razas-list/razas-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'razas', component: RazasListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

