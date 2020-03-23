import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GameService } from './game.service';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GameListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GameService]
})
export class AppModule { }
