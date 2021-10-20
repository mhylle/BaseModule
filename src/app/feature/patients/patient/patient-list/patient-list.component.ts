import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Patient} from '../../model/patient.model';
import {faInfoCircle, faMars, faVenus} from '@fortawesome/free-solid-svg-icons';
import {Store} from '@ngrx/store';
import {State} from '../../../../store';
import {LoadPatients, selectAllPatients} from '../../store';

/**
 * This component is responsible for creating a list of patients.
 */
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

  /**
   * Use this to be informed if a patient has been selected
   */
  @Output()
  selectedPatient: EventEmitter<Patient> = new EventEmitter<Patient>();

  constructor(private readonly store: Store<State>) {
  }

  /**
   * Initiate the loading of patients, and then select the patients from the store.
   */
  ngOnInit() {
    this.store.dispatch(LoadPatients());
    this.patients$ = this.store.select(selectAllPatients);
  }

  /**
   * When a patient is selected in the html, emit a selectedPatient event that others can listen to.
   * @param patient the patient that was selected and is to be emitted.
   */
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
