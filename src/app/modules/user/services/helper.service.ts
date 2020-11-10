import { Injectable } from '@angular/core';
import { IUser } from '../user.interface';

@Injectable()
export class HelperService {
    constructor() { }

    public getUsers(): IUser[] {
        return [
            {
                firstName: 'Vasya',
                lastName: 'Pupkin',
                age: 20,
            },
            {
                firstName: 'Ivan',
                lastName: 'Ivanov',
                age: 27
            },
            {
                firstName: 'Igor',
                lastName: 'Petrov',
                age: 35
            },
            {
                firstName: 'Nikolai',
                lastName: 'Zaycev',
                age: 41
            },
        ]
    }

}
