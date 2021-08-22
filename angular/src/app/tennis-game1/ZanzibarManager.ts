import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManagerOfZanzibar {
  getTexas(score) {
    switch (score) {
      case 0:
        return 'Love-All';
        break;
      case 1:
        return 'Fifteen-All';
        break;
      case 2:
        return 'Thirty-All';
        break;
      default:
        return 'Deuce';
        break;
    }
  }
}
