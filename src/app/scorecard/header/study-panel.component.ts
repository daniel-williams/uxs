import { Component, Input } from '@angular/core';
import {
  animate,
  keyframes,
  state,
  style,
  trigger,
  transition,
} from '@angular/animations';

import { StudyActions } from '../../store';
import { Study, StudyOptions } from '../types';


@Component({
  selector: 'study-panel',
  templateUrl: './study-panel.component.html',
  styleUrls: ['./study-panel.component.scss'],
  animations: [
    trigger('panelState', [
      transition(`:enter`, [
        style({transform: 'scale(0.7)', opacity: 0}),
        animate('0.2s ease-out', style({ transform: 'scale(1.0)', opacity: 1 }))
      ]),
      transition(`:leave`, [
        style({ transform: 'scale(1.0)', opacity: 1 }),
        animate('0.2s ease-out', style({ transform: 'scale(0.7)', opacity: 0 }))
      ]),
    ]),
  ],
})
export class StudyPanel {
  @Input() showPanel: boolean;
  @Input() studies: Study[];
  @Input() selectedStudy: StudyOptions;

  constructor(private studyActions: StudyActions) { }

  changeStudy(id: number) {
    this.studyActions.setStudy(id);
  }

  panelStateChanged() {

  }
}