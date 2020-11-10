import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { IUser } from '../../user.interface';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    public users: IUser[] = [];

    public testBoolean = true;
    public testEnumValue = 1;
    
    constructor(private helperService: HelperService) { }

    ngOnInit(): void {
        this.users = this.helperService.getUsers();
    }

    public onChildComponentClicked(middleName: string): void {
        console.log('MiddleName',middleName);
    }

}
