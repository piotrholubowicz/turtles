import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameService } from '../game.service';
import { Game } from '../game';
import { GameEngine } from '../game-engine';

@Component({
  selector: 'app-game-list',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games$: Observable<Game[]>;
  message: string;

  constructor(private service: GameService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.games$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.message = params.get('message');
        return this.service.getGames();
      })
    );
  }

  add(playersInput: string[]): void {
    const players = playersInput.filter(input => input !== '');
    if (players.length < 2) {
      return;
    }
    this.service.addGame(GameEngine.createGame(players)).subscribe();
  }

  delete(game: Game): void {
    this.service.deleteGame(game).subscribe();
  }
}
