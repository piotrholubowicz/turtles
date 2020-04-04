import { Observable } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Game, Color } from '../game';
import { GameService } from '../game.service';
import { ImageService } from '../image.service';

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
    private router: Router,
    private service: GameService,
    private imageService: ImageService,
  ) {}

  ngOnInit(): void {
    this.game$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getGame(+params.get('id')).pipe(
          catchError(err => {
            if (err.status == 404) {
              this.router.navigate(['/games', { message: 'Nie ma takiej gry!' }]);
            }
            console.log(`Error ${err.status}`);
            return this.game$;
          })
        )
      })
    );
  }

  boardSrc(): string {
    return this.imageService.getBoardPath();
  }

  turtleSrc(color: Color): string {
    return this.imageService.getTurtlePath(color);
  }

  left(color: Color): string {
    return "50%";
  }

  top(color: Color): string {
    return "30%";
  }

  zindex(color: Color): string {
    return "1";
  }

}
