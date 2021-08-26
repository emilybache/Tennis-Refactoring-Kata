import {FormGroup} from '@angular/forms';

export interface TennisGame {
  tennisGameForm: FormGroup;
  wonPoint(playerName: string): void;
  getScore(): string;
}
