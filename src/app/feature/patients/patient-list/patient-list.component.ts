import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient.model';
import {faInfoCircle, faMars, faVenus} from '@fortawesome/free-solid-svg-icons';
import {Store} from '@ngrx/store';
import {State} from '../../../store/reducers';
import {LoadPatients} from '../store/actions';
import {selectAllPatients} from '../store/selectors';


@Component({
  selector: 'sse-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientListComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  faMars = faMars;
  faVenus = faVenus;

  public patients$: Observable<Patient[]>;

  @Output()
  selectedPatient: EventEmitter<Patient> = new EventEmitter<Patient>();

  constructor(private readonly store: Store<State>) {
  }

  ngOnInit() {
    this.store.dispatch(LoadPatients());
    this.patients$ = this.store.select(selectAllPatients);
  }

  selectPatient(patient: Patient) {
    this.selectedPatient.emit(patient);
  }

  /**
   * Performance enhancements.
   * @param index index in the list
   * @param item the patient we are currently at
   */
  idTracker(index, item: Patient) {
    if (!item) {
      return null;
    }
    return item.id;
  }
}
