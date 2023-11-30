import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import {FormComponent} from "./form.component";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule
   ]
})
export class FormModule { }
