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
  games: Game[];

  constructor(private service: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    this.service.getGames().subscribe(games => this.games = games);
  }

  add(playersInput: string[]): void {
    let players = playersInput.filter(input => input != '');
    if (players.length < 2) { return; }
    this.service.addGame(GameEngine.createGame(players))
      .subscribe(game => {
        this.games.push(game);
      });
  }

  delete(game: Game): void {
    this.games = this.games.filter(h => h !== game);
    this.service.deleteGame(game).subscribe();
  }

}