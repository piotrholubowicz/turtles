import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { GamesComponent } from './games/games.component';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';
import { ColorPickerDialogComponent } from './color-picker-dialog/color-picker-dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImageService } from './image.service';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    GamesComponent,
    BoardComponent,
    PlayerComponent,
    CardComponent,
    ColorPickerDialogComponent,
    PageNotFoundComponent,
    GameOverComponent
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, GameService, InMemoryDataService, ImageService],
  entryComponents: [ColorPickerDialogComponent, GameOverComponent]
})
export class AppModule {}
