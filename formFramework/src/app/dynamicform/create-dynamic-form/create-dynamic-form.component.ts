import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';

export interface formElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface elementAttributes {
  key : string,
  defaultValue : string,
  class : string,
  mandatory : boolean
}


@Component({
  selector: 'app-create-dynamic-form',
  templateUrl: './create-dynamic-form.component.html',
  styleUrls: ['./create-dynamic-form.component.scss']
})
export class CreateDynamicFormComponent {

  dataSource: elementAttributes[] =[
    { "key" : "input", "defaultValue" : "Default", "class" : "sample", "mandatory" : true },
    { "key" : "dropdown", "defaultValue" : "", "class" : "sample", "mandatory" : false },
    { "key" : "input", "defaultValue" : "Test", "class" : "check", "mandatory" : false }
  ]
  displayedColumns: string[] = ['key', 'defaultValue', 'mandatory', 'class'];

  getData(data:any,element:any):any {
    return(data[element] || "");
  }
}
