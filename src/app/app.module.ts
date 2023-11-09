import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiagnosesFormComponent } from './components/diagnoses-form/diagnoses-form.component';
import { AccordionModule } from "ngx-bootstrap/accordion";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditDiagnoseModalComponent } from './components/edit-diagnose-modal/edit-diagnose-modal.component';
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { DiagnosesListModalComponent } from './components/diagnoses-list-modal/diagnoses-list-modal.component';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

@NgModule({
    declarations: [
        AppComponent,
        DiagnosesFormComponent,
        EditDiagnoseModalComponent,
        DiagnosesListModalComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AccordionModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        BsDatepickerModule,
        NgMultiSelectDropDownModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
