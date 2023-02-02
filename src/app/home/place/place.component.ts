import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {
  @Input()
  headerText: string;
  @Input()
  icon: string;
  @Input()
  headerSubText?: string;

  @Output()
  actionPerformed: EventEmitter<string> = new EventEmitter<string>();

  performAction(action: string) {
    this.actionPerformed.emit(action);
  }
}
