import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameService }  from '../game.service';
import { Game } from '../game';
import { GameEngine }  from '../game-engine';

@Component({
  selector: 'app-game-list',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games$: Observable<Game[]>;

  constructor(
    private service: GameService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('init: gamescomponent');
    this.games$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.service.getGames();
      })
    );
  }

  add(playersInput: string[]): void {
    let players = playersInput.filter(input => input != '');
    if (players.length < 2) { return; }
    this.service.addGame(GameEngine.createGame(players)).subscribe();
  }

  delete(game: Game): void {
    this.service.deleteGame(game).subscribe();
  }

}