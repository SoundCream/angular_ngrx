import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.components';

const routes: Routes = [
  { path:"", redirectTo: "", pathMatch: "full" },
  { path:"**", redirectTo:"user" },
  { path:"user", component: UsersComponent }
  // { path:"user", component: UsersComponent, runGuardsAndResolvers: "paramsOrQueryParamsChange"  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
