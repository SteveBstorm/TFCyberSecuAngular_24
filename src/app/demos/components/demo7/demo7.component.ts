import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MinAgeValidation } from '../../../shared/myvalidators/minage.validator';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrl: './demo7.component.scss'
})
export class Demo7Component {

  fg! : FormGroup

  constructor(private _builder : FormBuilder){
    this.fg = _builder.group({
      email : [null, [Validators.email, Validators.required]],
      pseudo : [null, [Validators.required, Validators.minLength(3)]],
      age : [null, [Validators.required, MinAgeValidation(18)]],
      genre : [null]
    })
  }

  onSubmit(){
    console.log(this.fg.value)
  }
}
