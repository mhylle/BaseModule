import {NgModule} from '@angular/core';
import {MenuComponent} from './menu.component';
import {SharedModule} from '../../shared.module';


@NgModule({
  declarations: [MenuComponent],
  exports: [
    MenuComponent,
  ],
  imports: [
    SharedModule
  ],
  providers: []
})
export class MenuModule {

}
