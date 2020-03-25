import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from './game';
import { GAMES } from './mock-games';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = GAMES;
    console.log("created the db")
    return {games};
  }

  // Overrides the genId method to ensure that a game always has an id.
  // If the games array is empty, the method below returns the initial number (11).
  // If the games array is not empty, the method below returns the highest
  // game id + 1.
  genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 100;
  }
}
