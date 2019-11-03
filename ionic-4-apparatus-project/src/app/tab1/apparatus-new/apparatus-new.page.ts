import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Apparatus } from 'src/app/models/apparatus.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-apparatus-new',
  templateUrl: './apparatus-new.page.html',
  styleUrls: ['./apparatus-new.page.scss'],
})
export class ApparatusNewPage implements OnInit {

  public form: FormGroup;
  apparatus: Apparatus;

  constructor(
    public modalCtrl: ModalController,
    private _FB: FormBuilder,
    private apiService: ApiService,
    private navCtrl: NavController
  ) {
    this.form = this._FB.group({
      name: ['', Validators.required],
      descriptions: this._FB.array([
        this.initDescriptionFields()
      ])
    });
  }

  ngOnInit() {
  }

  initDescriptionFields(): FormGroup {
    return this._FB.group({
      name: ['', Validators.required]
    });
  }

  addNewInputField(): void {
    const control = <FormArray>this.form.controls.descriptions;
    control.push(this.initDescriptionFields());
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.form.controls.descriptions;
    control.removeAt(i);
  }

  manage(val: any): void {
    this.apparatus = new Apparatus();
    this.apparatus.name = val.name;
    this.apparatus.description = [];
    for (var i = 0; i < val.descriptions.length; i++) {
      this.apparatus.description.push(val.descriptions[i].name);
    }
    this.addApparatus(this.apparatus);
    this.dismissModal();
  }

  addApparatus(apparatus: Apparatus) {
    this.apiService.addApparatus(apparatus).subscribe(response => {
      console.log(response);
      this.apparatus = response;
    }, err => {
      console.log(err);
      alert(err.message);
    })
  }

  async dismissModal() {
    await this.modalCtrl.dismiss();
    //this.navCtrl.navigateForward('/tabs/tabs/tab1/apparatuses');
  }

}
