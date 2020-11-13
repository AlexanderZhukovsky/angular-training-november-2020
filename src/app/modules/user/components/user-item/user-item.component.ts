import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../user.interface';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() userData: IUser;
  @Input() isRegistered: boolean;

  @Output() buttonClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    //console.log(this.userData);
  }

  public onButtonClick(): void {
    console.log('Button Clicked!');
    const middleName = this.userData.firstName + this.userData.lastName;
    this.buttonClick.emit(middleName);
  }

  public showMyName(): void {
    const middleName = this.userData.firstName + this.userData.lastName;
    console.log(middleName);
  }

}
