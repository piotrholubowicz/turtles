import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'games/:id', component: BoardComponent },
  { path: 'games/:id/:player', component: PlayerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
