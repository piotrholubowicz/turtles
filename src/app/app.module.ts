import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { GamesComponent } from './games/games.component';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';
import { ColorPickerDialogComponent } from './color-picker-dialog/color-picker-dialog.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )

   ],
  declarations: [ AppComponent, GamesComponent, BoardComponent, PlayerComponent, CardComponent, ColorPickerDialogComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GameService, InMemoryDataService],
  entryComponents: [ColorPickerDialogComponent]
})
export class AppModule { }
