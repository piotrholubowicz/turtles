import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Game, Color, ALL_CARDS } from '../game';
import { GameService } from '../game.service';
import { GameEngine }  from '../game-engine';
import { ColorPickerDialogComponent } from '../color-picker-dialog/color-picker-dialog.component';

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
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.game$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.player = params.get('player');
        return this.service.getGame(+params.get('id'));
      })
    );
  }

  onPlayed(event) {
    const colorOptions: Color[] = GameEngine.defineColors(event.game, event.cardIdx);
    if (colorOptions.length == 0) {
      // TODO: say no way
    } else if (colorOptions.length > 1) {
      const modalRef = this.modalService.open(ColorPickerDialogComponent);
      modalRef.componentInstance.colors = colorOptions;
      modalRef.result.then(
        (result) => {console.log(result);}
      ).catch((error) => {console.log(error);});
    } else {
      const card = ALL_CARDS[event.cardIdx];
      GameEngine.playCard(event.game, event.cardIdx, card.color);
      console.log(`${this.player} plays ${JSON.stringify(card)}`);
      this.service.updateGame(event.game).subscribe();
    }
  }  

}
