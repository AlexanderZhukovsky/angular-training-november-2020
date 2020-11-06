import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'second-test',
  templateUrl: './second-test.component.html',
  styleUrls: ['./second-test.component.scss'],
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class SecondTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
