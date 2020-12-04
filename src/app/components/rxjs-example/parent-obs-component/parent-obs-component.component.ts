import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';


@Component({
    selector: 'app-parent-obs-component',
    templateUrl: './parent-obs-component.component.html',
    styleUrls: ['./parent-obs-component.component.scss']
})

export class ParentObsComponentComponent implements OnInit {
    private clickCount = 1;

    private subj: Subject<number> = new Subject();
    public obs$ = this.subj.asObservable();
    public childVisibility = true;

    private parentSubj: Subject<any> = new Subject();

    private behaviorSubj: BehaviorSubject<any> = new BehaviorSubject({ firstName: 'Petr', lastName: 'Ivanov' });
    private replySubj: ReplaySubject<any> = new ReplaySubject(4);
    private asyncSubj: AsyncSubject<any> = new AsyncSubject();

    constructor(private http: HttpClient) { }

    public ngOnInit(): void {
        this.subj.subscribe(
            value => console.log('Sbj subscription: ' + value),
            error => console.log('Sbj error: ' + error),
            () => console.log('Sbj complete!')
        );

        // How to create obs
        const observable1 = of([1, 2, 3, 4]);

        const observable2 = new Observable<number>(
            subscriber => {
                subscriber.next(1);
                subscriber.next(2);
                subscriber.next(3);
            }
        );

        observable1.subscribe(x => console.log('TEST 1: ' + x));
        observable2.subscribe(x => console.log('TEST 2: ' + x));
    }

    public onFilterAndMapClicked(): void {
        const data = of([
            {
                brand: 'porsche',
                model: '911'
            },
            {
                brand: 'porsche',
                model: 'macan'
            },
            {
                brand: 'ferarri',
                model: '458'
            },
            {
                brand: 'lamborghini',
                model: 'urus'
            }
        ]);

        data.pipe(
            map(cars => cars.map(car => `${car.brand} ${car.model}`))
        )
            .subscribe(cars => console.log(cars));

        data.pipe(
            map(cars => cars.filter(car => car.brand === 'porsche'))
        )
            .subscribe(cars => console.log(cars));
    }

    public onNextClick(): void {
        this.subj.next(this.clickCount++);
    }

    public onErrorClick(): void {
        this.subj.error('Some test error');
    }

    public onCompleteClick(): void {
        this.subj.complete();
    }

    public get parentObs$(): Observable<any> {
        return this.parentSubj.asObservable();
    }

    public onUpdateChildClick(): void {
        const count = this.clickCount++;
        this.parentSubj.next({ firstName: 'Vasya' + count, lastName: 'Pupkin' + count });
    }

    // sbj. types exmpl.
    public get behaviorSbjObs$(): Observable<any> {
        return this.behaviorSubj.asObservable();

        // reply subj.
        // return this.replySubj.asObservable();

        // async subj.
        // return this.asyncSubj.asObservable();
    }

    // sbj. types exmpl.
    public onSubjTypesChangeClick(): void {
        const count = this.clickCount++;
        this.behaviorSubj.next({ firstName: 'Vasya' + count, lastName: 'Pupkin' + count });

        // reply subj.
        // this.replySubj.next({ firstName: 'Vasya' + count, lastName: 'Pupkin' + count });

        // async subj.
        // this.asyncSubj.next({ firstName: 'Vasya' + count, lastName: 'Pupkin' + count });
    }

    public onAsyncSubjComplete(): void {
        this.asyncSubj.complete();
    }
}
