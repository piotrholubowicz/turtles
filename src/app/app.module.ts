import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { GamesComponent } from './games/games.component';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

   ],
  declarations: [ AppComponent, GamesComponent, BoardComponent, PlayerComponent, CardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GameService, InMemoryDataService]
})
export class AppModule { }
