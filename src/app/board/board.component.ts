import { Observable } from 'rxjs';
import { switchMap, catchError, tap } from 'rxjs/operators';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Game, Color, Card, ALL_CARDS } from '../game';
import { GameEngine } from '../game-engine';
import { GameService } from '../game.service';
import { ImageService } from '../image.service';
import { GameOverComponent } from '../game-over/game-over.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  game$: Observable<Game>;
  allColors: Color[] = [Color.RED, Color.YELLOW, Color.BLUE, Color.PURPLE, Color.GREEN];
  Color = Color;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GameService,
    private imageService: ImageService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.game$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getGame(+params.get('id')).pipe(
          tap((game) => {
            if (game.winner) {
              this.gameOver(game).then((result) => {
                if (result === 'onemore') {
                  console.log('once more!');
                  this.service
                    .addGame(GameEngine.createGame(GameEngine.shuffle([...game.players])))
                    .subscribe((newGame) => {
                      this.router.navigate(['/board', newGame.id]);
                    });
                }
              });
            }
          }),
          catchError((err) => {
            if (err.status === 404) {
              this.router.navigate(['/games', { message: 'Nie ma takiej gry!' }]);
            }
            console.log(`Error ${err.status}`);
            return this.game$;
          })
        );
      })
    );
  }

  turtleSrc(color: Color): string {
    return this.imageService.getTurtlePath(color);
  }

  left(game: Game, color: Color): string {
    const x = [80, 76, 67, 58, 50, 41, 32, 25, 15, 8];
    const fieldAndPos = GameEngine.findPosition(game, color);

    if (fieldAndPos[0] === 0) {
      return `${x[0] + 1.7 * color}%`;
    }

    return `${x[fieldAndPos[0]]}%`;
  }

  top(game: Game, color: Color): string {
    const y = [20, 50, 57, 51, 34, 27, 40, 57, 49, 35];
    const fieldAndPos = GameEngine.findPosition(game, color);
    const field = fieldAndPos[0];
    const pos = fieldAndPos[1];

    if (field === 0) {
      return `${y[0] + 15 * color}%`;
    }

    // height of a meeple is 5%
    return `${y[field] - pos * 5}%`;
  }

  zindex(game: Game, color: Color): string {
    const z = [0, 1, 2, 3, 2, 1, 2, 3, 2, 1];
    const fieldAndPos = GameEngine.findPosition(game, color);

    if (fieldAndPos[0] === 0) {
      return `${color}`;
    }

    return `${10 * z[fieldAndPos[0]] + fieldAndPos[1]}`;
  }

  gameOver(game: Game): Promise<any> {
    const modalRef = this.modalService.open(GameOverComponent);
    modalRef.componentInstance.winner = game.winner;
    modalRef.componentInstance.color = game.colors[game.winner];
    return modalRef.result;
  }

  cardBackSrc(): string {
    return this.imageService.getMoveCardPath();
  }

  cardFrontSrc(cardIdx: number): string {
    return this.imageService.getMoveCardPath(ALL_CARDS[cardIdx]);
  }

  leftMoveCard(i: number): string {
    return `${20 + i}%`;
  }
}
