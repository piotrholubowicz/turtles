import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { GamesComponent } from './games/games.component';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, GamesComponent, BoardComponent, PlayerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GameService]
})
export class AppModule { }
