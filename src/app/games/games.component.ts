import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameService }  from '../game.service';
import { Game } from '../game';

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
  ) {}

  ngOnInit() {
    this.games$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.service.getGames();
      })
    );
  }
}