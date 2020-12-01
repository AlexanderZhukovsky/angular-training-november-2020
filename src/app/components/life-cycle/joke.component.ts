import {
    Component,
    Input,
    SimpleChanges,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

export class Joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;

    constructor(setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }

    public toggle(): void {
        this.hide = !this.hide;
    }
}

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
    selector: 'app-joke',
    template: `
<div style="border: 1px solid black; margin: 15px; padding: 15px;">
  <h4>
    <ng-content select=".setup"></ng-content>
  </h4>
  <p [hidden]="myData.hide">
    <ng-content select=".punchline"></ng-content>
  </p>
  <a style="border: 1px solid red"
     (click)="myData.toggle()">Tell Me
  </a>
</div>
`
})
export class JokeComponent
    implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

    @Input() myData: Joke;

    private a: Joke;

    constructor() {
        console.log(`Constructor - JokeComponent, Data: ${this.myData}`);
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //     // tslint:disable-next-line: forin
    //     for (const key in changes) {
    //         console.log(`NgOnChanges - JokeComponent, ${key} changed.
    //         Current: ${changes[key].currentValue}.
    //         Previous: ${changes[key].previousValue}`
    //         );
    //     }
    // }

    ngOnInit(): void {
        console.log(`ngOnInit - JokeComponent, Data: ${this.myData}`);
    }

    ngDoCheck(): void {
        console.log('ngDoCheck - JokeComponent');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit - JokeComponent');
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked - JokeComponent');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit - JokeComponent');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked - JokeComponent');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy - JokeComponent');
    }
}

