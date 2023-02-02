import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import { PlaceComponent } from './place/place.component';
import { TreatmentComponent } from './treatment/treatment.component';

@NgModule({
    imports: [HomeRoutingModule, SharedModule],
  exports: [],
  declarations: [HomeRoutingModule.components, PlaceComponent, TreatmentComponent],
})
export class HomeModule {

}
