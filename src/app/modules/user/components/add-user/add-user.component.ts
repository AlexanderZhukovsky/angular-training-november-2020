import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/modules/services/helper.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  // providers: [HelperService]
})
export class AddUserComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    this.helperService.firstName = 'Sergei';
  }

}
