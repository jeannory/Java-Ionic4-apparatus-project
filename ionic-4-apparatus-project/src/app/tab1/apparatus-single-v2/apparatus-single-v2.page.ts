import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Apparatus } from 'src/app/models/apparatus.model';


@Component({
  selector: 'app-apparatus-single-v2',
  templateUrl: './apparatus-single-v2.page.html',
  styleUrls: ['./apparatus-single-v2.page.scss'],
})
export class ApparatusSingleV2Page implements OnInit {

  apparatus: Apparatus = new Apparatus();
  public formGroup: FormGroup;
  descriptions: FormArray;

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) {
  }

  ngOnInit() {
    this.apparatus = this.navParams.get('apparatus');
    this.formGroup = this.formBuilder.group({
      name: [this.apparatus.name, Validators.required],
      descriptions: this.formBuilder.array([])
    });
    this.initDescriptions();
  }

  initDescriptions(): void {
    this.descriptions = this.formGroup.get('descriptions') as FormArray;
    for (var i = 0; i < this.apparatus.description.length; i++) {
      this.descriptions.push(this.initDescriptionFieldWithParam(this.apparatus.description[i]));
    }
  }

  getDescriptionArray() {
    return this.formGroup.get('description') as FormArray;
  }

  initDescriptionFieldWithParam(param: string): FormGroup {
    return this.formBuilder.group({
      name: [param, Validators.required]
    });
  }

  initDescriptionField(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  addNewInputField(): void {
    const control = <FormArray>this.formGroup.controls.descriptions;
    control.push(this.initDescriptionField());
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.formGroup.controls.descriptions;
    control.removeAt(i);
  }

  manage(val: any): void {
    this.apparatus.name = val.name;
    this.apparatus.description = [];
    for (var i = 0; i < val.descriptions.length; i++) {
      this.apparatus.description.push(val.descriptions[i].name);
    }
      this.apiService.setApparatus(this.apparatus).subscribe(response => {
        console.log(response);
      }, err => {
        console.log(err);
        alert(err.message);
      })
    this.dismissModal();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
