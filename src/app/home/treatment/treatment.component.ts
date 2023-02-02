import {Component, Input} from '@angular/core';
import {Treatment} from '../treatment.model';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent {
  @Input()
  treatment?: Treatment;
  public editMode: boolean;

  constructor() {
    if (!this.treatment) {
      this.treatment = {
        name: ''
      };
      this.editMode = true;
    } else {
      this.editMode = true;
    }
  }

}
