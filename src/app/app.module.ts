import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTestComponent } from './components/first-test/first-test.component';
import { SecondTestComponent } from './components/second-test/second-test.component';
import { UserModule } from './modules/user/user.module';
import { SimpleFormElementsComponent } from './components/forms/simple-form-elements/simple-form-elements.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { ComplexFormComponent } from './components/forms/complex-form/complex-form.component';
import { AddressesComponent } from './components/forms/complex-form/addresses.component';
import { SimpleValidationComponent } from './components/forms/simple-validation/simple-validation.component';
import { ComplexValidationComponent } from './components/forms/complex-validation/complex-validation.component';
import { SecurityInfoComponent } from './components/forms/complex-validation/security-info/security-info.component';
import { PersonalInfoComponent } from './components/forms/complex-validation/personal-info/personal-info.component';
import { DataManipulationComponent } from './components/forms/data-manipulation/data-manipulation.component';
import { DataManipulationAddressesComponent } from './components/forms/data-manipulation/addresses.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { JokeComponent } from './components/life-cycle/joke.component';
import { JokeListComponent } from './components/life-cycle/joke-list.component';
import { ChildObsComponentComponent } from './components/rxjs-example/child-obs-component/child-obs-component.component';
import { ChildSubjectTypesComponent } from './components/rxjs-example/child-subject-types/child-subject-types.component';
import { ParentObsComponentComponent } from './components/rxjs-example/parent-obs-component/parent-obs-component.component';
import { SomeTestExampleModule } from './modules/routing-example/some-test-example.module';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { ExponentialStrengthPipe } from './components/pipe-example/exponential-strength.pipe';
import { FlyingHeroesPipe } from './components/pipe-example/flying-heros.pipe';

@NgModule({
    declarations: [
        AppComponent,
        FirstTestComponent,
        SecondTestComponent,
        SimpleFormElementsComponent,
        ComplexFormComponent,
        AddressesComponent,
        SimpleValidationComponent,
        ComplexValidationComponent,
        SecurityInfoComponent,
        PersonalInfoComponent,
        DataManipulationComponent,
        DataManipulationAddressesComponent,
        LifeCycleComponent,
        JokeComponent,
        JokeListComponent,
        ParentObsComponentComponent,
        ChildSubjectTypesComponent,
        ChildObsComponentComponent,
        PipeExampleComponent,
        ExponentialStrengthPipe,
        FlyingHeroesPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        PrettyJsonModule,
        SomeTestExampleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
