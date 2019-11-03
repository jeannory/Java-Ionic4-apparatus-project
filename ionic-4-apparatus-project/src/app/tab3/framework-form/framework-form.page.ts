import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-framework-form',
  templateUrl: './framework-form.page.html',
  styleUrls: ['./framework-form.page.scss'],
})
export class FrameworkFormPage implements OnInit {

  public form: FormGroup;

  ngOnInit() {
}

constructor(private _FB: FormBuilder){
   this.form = this._FB.group({
      name       	  : ['', Validators.required],
      technologies     : this._FB.array([
         this.initTechnologyFields()
      ])
   });
}

   initTechnologyFields() : FormGroup
   {
      return this._FB.group({
         name 		: ['', Validators.required]
      });
   }

   addNewInputField() : void
   {
      const control = <FormArray>this.form.controls.technologies;
      control.push(this.initTechnologyFields());
   }

   removeInputField(i : number) : void
   {
      const control = <FormArray>this.form.controls.technologies;
      control.removeAt(i);
   }

   manage(val : any) : void
   {
      console.dir(val);
   }


}
