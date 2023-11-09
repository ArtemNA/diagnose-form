import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiagnosesFormComponent} from "./components/diagnoses-form/diagnoses-form.component";

const routes: Routes = [
  {
    path: '',
    component: DiagnosesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
