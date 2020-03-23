import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/game-list', pathMatch: 'full' },
  { path: 'game-list', component: GameListComponent },
//  { path: 'game/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
