import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Game, Color } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  game$: Observable<Game>;
  Color = Color;

  constructor(
    private route: ActivatedRoute,
    private service: GameService,
  ) {}

  ngOnInit(): void {
    this.game$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getGame(params.get('id')))
    );
  }
}
