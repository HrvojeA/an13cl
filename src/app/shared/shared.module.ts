import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent} from "../component/form/form.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormModule} from "../component/form/form.module";

const COMPONENT= [
  FormComponent
];


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent
  ]
})
export class SharedModule { }
