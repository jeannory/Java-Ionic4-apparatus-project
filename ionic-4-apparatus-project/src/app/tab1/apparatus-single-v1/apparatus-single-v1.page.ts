import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apparatus-single-v1',
  templateUrl: './apparatus-single-v1.page.html',
  styleUrls: ['./apparatus-single-v1.page.scss'],
})
export class ApparatusSingleV1Page implements OnInit {

  name : string = null;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.activedRoute.snapshot.paramMap.get('name');
  }

}
