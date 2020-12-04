import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, merge, combineLatest, Subscription } from 'rxjs';
import { takeWhile, map, mergeMap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-child-obs-component',
    templateUrl: './child-obs-component.component.html',
    styleUrls: ['./child-obs-component.component.scss']
})
export class ChildObsComponentComponent implements OnInit, OnDestroy {
    @Input() observable$: Observable<any>;

    public childFormGroup = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl('')
    });

    private componentActive = true;
    private subscribe: Subscription = new Subscription();

    constructor() { }

    ngOnInit(): void {
        this.observable$
            .pipe(takeWhile(() => this.componentActive))
            .subscribe(value => {
                this.childFormGroup.patchValue(value);
                console.log('Child Obs component Update');
            });


        // Exmpl. of unsubscribe.
        // this.observable$
        //     .pipe(takeWhile(() => this.componentActive))
        //     .subscribe(value => {
        //         this.childFormGroup.patchValue(value);
        //         console.log('Child Obs component Update');
        //     });


        // Merge exmpl
        // merge(
        //     this.childFormGroup.get('firstName').valueChanges,
        //     this.childFormGroup.get('lastName').valueChanges
        // ).subscribe(data => {
        //    console.log('Merge: ' + data);
        // });


        // Mapping in pipe exmpl
        // merge(
        //     this.childFormGroup.get('firstName').valueChanges
        //         .pipe(
        //             map(value => {
        //                 return {
        //                     control: 'firstName', newValue: value
        //                 };
        //             })
        //         ),
        //     this.childFormGroup.get('lastName').valueChanges
        //         .pipe(
        //             map(value => {
        //                 return {
        //                     control: 'lastName', newValue: value
        //                 };
        //             })
        //         ))
        //     .subscribe(data => {
        //         console.log('Merge: ' + data);
        //     });

        // combineLatest exmpl.
        // combineLatest([
        //     this.childFormGroup.get('firstName').valueChanges,
        //     this.childFormGroup.get('lastName').valueChanges
        // ]).subscribe(data => {
        //     console.log('combineLatest: ' + data);
        // });


        //mergeMap exmpl
        // this.childFormGroup.get('firstName').valueChanges
        //     .pipe(
        //         mergeMap(firstNameValue =>
        //             this.childFormGroup.get('lastName').valueChanges
        //                 .pipe(map(lastNameValue => firstNameValue + ', ' + lastNameValue))
        //         )
        //     ).subscribe(x => console.log(x));



        // this.childFormGroup.get('firstName').valueChanges
        //     .pipe(
        //         debounceTime(500),
        //         distinctUntilChanged(),
        //     )
        //     .subscribe(x => console.log(x));
    }

    // Exmpl. of unsubscribe.
    ngOnDestroy(): void {
        this.componentActive = false;
    }

}
