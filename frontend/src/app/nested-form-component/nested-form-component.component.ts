import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form-component',
  templateUrl: './nested-form-component.component.html',
  styleUrls: ['./nested-form-component.component.css']
})
export class NestedFormComponentComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      email: '',
      homePhone: this.fb.group({
        area: [],
        prefix: [],
        line: []
      }),
      cellPhone: this.fb.group({
        area: [],
        prefix: [],
        line: []
      })
    });
  }

}
