import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { FlyingHeroesPipe } from './flying-heros.pipe';

@Component({
    selector: 'app-pipe-example',
    templateUrl: './pipe-example.component.html',
    styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {
    public money = 500000;
    public birthDay = new Date();
    public toggle = true;
    get format(): string { return this.toggle ? 'shortDate' : 'fullDate'; }

    public heroes = [
        {
            name: 'BatMan',
            canFly: false
        },
        {
            name: 'SuperMan',
            canFly: true
        },
        {
            name: 'SpiderMan',
            canFly: false
        },
        {
            name: 'Thor',
            canFly: true
        }
    ];

    public heroes$ = of(this.heroes);

    public hero$ = of({
        name: 'Thor',
        canFly: true
    });

    public toggleFormat(): void { this.toggle = !this.toggle; }

    ngOnInit(): void {
        const filterPipe = new FlyingHeroesPipe();
        const filteredArray = filterPipe.transform(this.heroes);
        console.log(filteredArray);
    }
}
