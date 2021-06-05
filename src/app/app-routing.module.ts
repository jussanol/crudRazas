import { Route } from '@angular/compiler/src/core';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RazaFormComponent } from './entities/razas/raza-form/raza-form.component';
import { RazasListComponent } from './entities/razas/razas-list/razas-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'razas', component: RazasListComponent },
  { path: 'razas-form', component: RazaFormComponent },
  { path: 'razas-form/:razaId', component: RazaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

