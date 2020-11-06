import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class FirstTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
