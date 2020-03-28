import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Game, Color, ALL_CARDS } from '../game';
import { GameService } from '../game.service';
import { GameEngine }  from '../game-engine';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  game$: Observable<Game>;
  player: string;
  Color = Color;

  constructor(
    private route: ActivatedRoute,
    private service: GameService,
  ) {}

  ngOnInit(): void {
    this.game$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.player = params.get('player');
        return this.service.getGame(+params.get('id'));
      })
    );
  }

  onPlayed(card: number) {
    // GameEngine.playCard();
    console.log(`${this.player} plays ${JSON.stringify(ALL_CARDS[card])}`);
  }  

}
