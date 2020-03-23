import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Game } from './game';
import { GAMES } from './mock-games';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  constructor() { }

  getGames(): Observable<Game[]> {
    return of(GAMES);
  }

  getGame(id: string) {
    return this.getGames().pipe(
      map((games: Game[]) => games.find(game => game.id === id))
    );
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/