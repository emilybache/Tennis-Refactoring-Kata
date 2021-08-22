import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SevenStagesOfNamingService {
  isAppleSauce(P1point, P2point) {
    return P1point > P2point && P1point < 4;
  }
  getAppleSauce(P1res, P2res, P1point, P2point) {
      if (P1point === 2)
        P1res = 'Thirty';
      if (P1point === 3)
        P1res = 'Forty';
      if (P2point === 1)
        P2res = 'Fifteen';
      if (P2point === 2)
        P2res = 'Thirty';
      return P1res + '-' + P2res;
  }
}
