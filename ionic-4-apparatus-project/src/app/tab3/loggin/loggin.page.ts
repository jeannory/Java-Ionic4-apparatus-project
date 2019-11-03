import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class LogginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit() {
  }

  onClickSubmit() {
    console.log('Start login with: '
      + this.loginForm.value.username + ':'
      + this.loginForm.value.password);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
