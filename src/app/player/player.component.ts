import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Game, Color } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  game$: Observable<Game>;
  player$: Observable<string>;
  Color = Color;

  constructor(
    private route: ActivatedRoute,
    private service: GameService,
  ) {}

  ngOnInit(): void {
    this.game$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getGame(+params.get('id')))
    );
    this.player$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        params.get('player'))
    );
  }
}
