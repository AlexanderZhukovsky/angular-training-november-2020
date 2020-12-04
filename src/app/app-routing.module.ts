import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplexFormComponent } from './components/forms/complex-form/complex-form.component';
import { ComplexValidationComponent } from './components/forms/complex-validation/complex-validation.component';
import { DataManipulationComponent } from './components/forms/data-manipulation/data-manipulation.component';
import { SimpleFormElementsComponent } from './components/forms/simple-form-elements/simple-form-elements.component';
import { SimpleValidationComponent } from './components/forms/simple-validation/simple-validation.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { ParentObsComponentComponent } from './components/rxjs-example/parent-obs-component/parent-obs-component.component';

const routes: Routes = [
    { path: 'simple-elements', component: SimpleFormElementsComponent },
    { path: 'simple-validation', component: SimpleValidationComponent },
    { path: 'complex-form', component: ComplexFormComponent },
    { path: 'complex-validation', component: ComplexValidationComponent },
    { path: 'data-manipulation', component: DataManipulationComponent },
    { path: 'life-cycle', component: LifeCycleComponent},
    { path: 'rxjs', component: ParentObsComponentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
