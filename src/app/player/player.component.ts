import { Observable, of, merge, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Game, Color, ALL_CARDS } from '../game';
import { GameService } from '../game.service';
import { GameEngine }  from '../game-engine';
import { ImageService } from '../image.service';
import { ColorPickerDialogComponent } from '../color-picker-dialog/color-picker-dialog.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  game$: Observable<Game>;
  turtleCardSrc$: Observable<string>;
  player: string;
  ColorT = Color;

  constructor(
    private route: ActivatedRoute,
    private service: GameService,
    private modalService: NgbModal,
    private imageService: ImageService,
) {}

  ngOnInit(): void {
    this.game$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.player = params.get('player');
        return this.service.getGame(+params.get('id'));
      })
    );
    this.turtleCardSrc$ = of(this.turtleCardSrc());
  }

  onPlayed(event) {
    const colorOptions: Color[] = GameEngine.defineColors(event.game, event.cardIdx);
    if (colorOptions.length == 0) {
      this.cantPlayCard();
    } else if (colorOptions.length > 1) {
      this.pickOneColor(colorOptions).then(result => {
        this.playTheCard(event.game, event.cardIdx, +result.color);
      }).catch(error => {
        console.log(error);
      });
    } else {
      this.playTheCard(event.game, event.cardIdx, colorOptions[0]);
    }
  }

  cantPlayCard() {

  }

  pickOneColor(colorOptions: Color[]): Promise<any> {
      const modalRef = this.modalService.open(ColorPickerDialogComponent);
      modalRef.componentInstance.colors = colorOptions;
      return modalRef.result;
  }

  playTheCard(game: Game, cardIdx: number, color: Color) {
      GameEngine.playCard(game, cardIdx, color);
      console.log(`${this.player} plays ${JSON.stringify(ALL_CARDS[cardIdx])}`);
      this.service.updateGame(game).subscribe();
  }

  turtleCardSrc(color?: Color): string {
    return this.imageService.getTurtleCardPath(color);
  }

  showTurtleCard(color: Color) {
    this.turtleCardSrc$ = merge(
      of(this.turtleCardSrc(color)),
      timer(2000).pipe(
        switchMap(_ => of(this.turtleCardSrc()))
      )
    );
  }

}
