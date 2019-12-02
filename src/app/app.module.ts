import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {dom, library} from '@fortawesome/fontawesome-svg-core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {MenuModule} from './shared/components/menu/menu.module';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoadingInterceptor} from './core/interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MenuModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faHome);
    dom.watch();
  }
}
