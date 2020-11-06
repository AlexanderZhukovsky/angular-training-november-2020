import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HelperService } from 'src/app/modules/services/helper.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  // providers: [HelperService]
})
export class UserItemComponent implements OnInit {
  public name: string;

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    const firstName = this.helperService.showFirstName();
    this.helperService.consoleLog(firstName);
  }

}
