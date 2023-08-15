import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateformComponent } from './dynamicform/generateform/generateform.component';
import { CreateDynamicFormComponent } from './dynamicform/create-dynamic-form/create-dynamic-form.component';

const routes: Routes = [
  { path: 'framework/create', component: CreateDynamicFormComponent },
  { path: 'framework/generate', component: GenerateformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
