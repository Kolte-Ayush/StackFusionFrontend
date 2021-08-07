import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFromComponent } from './user-from/user-from.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [
  {path : "user-form", component: UserFromComponent},
  {path:'',redirectTo:"user-form",pathMatch:"full"},
  {path: "user-list", component: UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
