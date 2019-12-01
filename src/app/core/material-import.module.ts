import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [MatProgressBarModule,
    MatDialogModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  exports: [MatProgressBarModule,
    MatDialogModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  providers: []
})
export class MaterialImportModule {
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor() {
    // super(parentModule);
  }
}
