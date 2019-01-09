import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneplaceComponent  } from './oneplace/oneplace.component';
import { ManyplacesComponent  } from './manyplaces/manyplaces.component';


const routes: Routes = [
  { path: '', redirectTo: '/manyplaces', pathMatch: 'full' },
  { path: 'manyplaces', component: ManyplacesComponent },
  { path: 'oneplace', component: OneplaceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
