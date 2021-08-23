import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManagerOfZanzibar {
  getTexas(m_score1, m_score2){
    let score = '';
    let tempScore = 0;
    if (m_score1 === m_score2) {
      switch (m_score1) {
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
    } else if (m_score1 >= 4 || m_score2 >= 4) {
      console.log(m_score1);
      console.log(m_score2);
      const minusResult: number = m_score1 - m_score2;
      console.log(minusResult);
      if (minusResult === 1) { score = 'Advantage player1'; console.log(score); }
      else if (minusResult === -1) { score = 'Advantage player2'; console.log(score); }
      else if (minusResult >= 2) { score = 'Win for player1'; }
      else { console.log('yo'); score = 'Win for player2'; console.log(score); }

    } else {
      for (let i = 1; i < 3; i++) {
        if (i === 1) { tempScore = m_score1; } else { score += '-'; tempScore = m_score2; }
        switch (tempScore) {
          case 0:
            score += 'Love';
            break;
          case 1:
            score += 'Fifteen';
            break;
          case 2:
            score += 'Thirty';
            break;
          case 3:
            score += 'Forty';
            break;
        }
      }
    }
    console.log('yo');
    return score;
  }
}
