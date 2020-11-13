import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { IUser } from '../../user.interface';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    @ViewChildren(UserItemComponent) userItems: QueryList<UserItemComponent>;
    //@ViewChild(UserItemComponent) child: UserItemComponent;

    public users: IUser[] = [];

    public testBoolean = true;
    public testEnumValue = 1;
    
    constructor(private helperService: HelperService) { }

    ngOnInit(): void {
        this.users = this.helperService.getUsers();
    }

    ngAfterViewInit() {
        //this.child.showMyName();
        this.userItems.forEach(item => item.showMyName());
    }

    public onChildComponentClicked(middleName: string): void {
        console.log('MiddleName',middleName);
    }

}
