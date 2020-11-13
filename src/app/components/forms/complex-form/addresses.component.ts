import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

export class Address {
    country: string = '';
    city: string = '';
    addressLine: string = '';
}

@Component({
    selector: 'addresses-component',
    templateUrl: './addresses.component.html',
    styleUrls: ['./addresses.component.scss']
})

export class AddressesComponent implements OnInit {

    @Input() parentFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    /** Add formArray with 'addresses' name to parent formGroup */
    ngOnInit() { 
        this.parentFormGroup.addControl('addresses', new FormArray( [this.initAddressFormGroup()] ));
    }

    public get addressesControls(): any {
        return (this.parentFormGroup.get('addresses') as FormArray).controls;
    }

    /** Create new formGroup based on Address model */
    public initAddressFormGroup() {
        return this.formBuilder.group(new Address());
    }

    public addAddress() {
        let addresses = this.parentFormGroup.get('addresses') as FormArray;
        addresses.push(this.initAddressFormGroup() );

        /** Add control to current index 
        addresses.insert( index, this.initAddressFormGroup() );  */
    }
}
