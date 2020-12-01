import {
    Component, OnChanges, OnDestroy, AfterContentChecked,
    AfterViewInit, AfterViewChecked, AfterContentInit, OnInit, DoCheck, Input, ViewChild
} from '@angular/core';
import { Joke } from './joke.component';

@Component({
    selector: 'app-joke-list',
    template: `
<app-joke *ngFor="let j of jokes" [myData]="j">
  <span class="setup">{{ j.setup }}?</span>
  <h1 class="punchline">{{ j.punchline }}</h1>
</app-joke>

<button type="button"
        (click)="addJoke()">Add Joke
</button>
  <button type="button"
        (click)="deleteJoke()">Clear Jokes
</button>
`
})
export class JokeListComponent implements
    OnInit,
    // DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnChanges,
    OnDestroy {

    jokes: Joke[] = [
        new Joke(
            'What did the cheese say when it looked in the mirror',
            'Hello-me (Halloumi)'
        )
    ];

    constructor() {
        console.log('Constructor - JokeListComponent');
    }

    ngOnChanges(): void {
        console.log('NgOnChanges - JokeListComponent');
    }

    ngOnInit(): void {
        console.log(`ngOnInit - JokeListComponent`);

    }

    // ngDoCheck(): void {
    //     console.log('ngDoCheck - JokeListComponent');
    // }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit - JokeListComponent');
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked - JokeListComponent');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit - JokeListComponent');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked - JokeListComponent');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy - JokeListComponent');
    }

    addJoke(): void {
        this.jokes.unshift(
            new Joke(
                'What did the cheese say when it looked in the mirror',
                'Hello-me (Halloumi)'
            )
        );
    }

    deleteJoke(): void {
        this.jokes = [];
    }
}
