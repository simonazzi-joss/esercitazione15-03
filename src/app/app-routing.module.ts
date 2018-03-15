import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'form', component: FormComponent },
  { path: '**', component: BodyComponent },
  { path: '', component: BodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
