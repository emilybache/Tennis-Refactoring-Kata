import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Zeus {
  isAnnoying(p1, p2) {
    return p1 < 4 && p2 < 4 && !(p1 + p2 === 6);
  }
  getLightning(s, p1, p2) {
    const p: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    s = p[p1];
    return (p1 === p2) ? s + '-All' : s + '-' + p[p2];
  }
}
