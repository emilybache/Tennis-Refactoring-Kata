export interface TennisGame {
  wonPoint(playerName: string): void;
  getScore(): string;
}
