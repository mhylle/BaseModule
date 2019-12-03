import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MaterialImportModule} from '../core/material-import.module';
import {ButtonComponent} from './components/button/button.component';
import {LoadingComponent} from './components/loading/loading.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [ButtonComponent, LoadingComponent],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MaterialImportModule,
    ButtonComponent,
    LoadingComponent,
    ScrollingModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MaterialImportModule,
    ScrollingModule,
  ],
  providers: []
})
export class SharedModule {
}
