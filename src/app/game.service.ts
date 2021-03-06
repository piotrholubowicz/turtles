import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, timer, Subject, EMPTY, throwError } from 'rxjs';
import { catchError, map, tap, switchMap, distinctUntilChanged, shareReplay } from 'rxjs/operators';

import { Game, Color } from './game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  // private gamesUrl = 'https://turtles-server--piotrholubowicz.repl.co/games/'; // URL to web api
  private gamesUrl = 'https://turtles-server.herokuapp.com/games'; // URL to web api
  private cache: { [url: string]: string } = {}; // url => etag

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  /** GET games from the server */
  getGames(): Observable<Game[]> {
    const url = this.gamesUrl;
    delete this.cache[url];
    return timer(0, 1000).pipe(
      switchMap((_) => this.fetchUrl<Game[]>(url, 'getGames')), // a new http request on every tick
      shareReplay({
        bufferSize: 1,
        refCount: true,
      }) // create a new Subject, which will act as a proxy
    );
  }

  /** GET game by id. Will 404 if id not found */
  getGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
    delete this.cache[url];
    return timer(0, 1000).pipe(
      switchMap((_) => this.fetchUrl<Game>(url, `getGame id=${id}`)), // a new http request on every tick
      shareReplay({
        bufferSize: 1,
        refCount: true,
      }) // create a new Subject, which will act as a proxy
    );
  }

  fetchUrl<T>(url: string, operation: string): Observable<T> {
    const headers = this.cache[url] ? this.headers.set('If-None-Match', this.cache[url]) : this.headers;
    return this.http
      .get<T>(url, { observe: 'response', headers })
      .pipe(
        tap((resp) => (this.cache[url] = resp.headers.get('Etag'))),
        map((resp) => resp.body),
        catchError(this.handleError<T>(operation))
      );
  }

  //////// Save methods //////////

  /** POST: add a new game to the server */
  addGame(game: Game, currentGame?: Game): Observable<Game> {
    const url = currentGame ? `${this.gamesUrl}?prevGame=${currentGame.id}` : this.gamesUrl;
    return this.http
      .post<Game>(url, game, { headers: this.headers })
      .pipe(
        tap((newGame: Game) => console.log(`added game w/ id=${newGame.id}`)),
        tap((g: Game) => console.log(g)),
        catchError(this.handleError<Game>('addGame'))
      );
  }

  /** DELETE: delete the game from the server */
  deleteGame(game: Game | number): Observable<Game> {
    const id = typeof game === 'number' ? game : game.id;
    const url = `${this.gamesUrl}/${id}`;

    return this.http
      .delete<Game>(url, { headers: this.headers })
      .pipe(
        tap((_) => console.log(`deleted game id=${id}`)),
        catchError(this.handleError<Game>('deleteHero'))
      );
  }

  /** PUT: update the game on the server */
  updateGame(game: Game): Observable<any> {
    const url = `${this.gamesUrl}/${game.id}`;
    console.log(game);
    return this.http.put(url, game, { headers: this.headers }).pipe(
      tap((_) => console.log(`updated game id=${game.id}`)),
      catchError(this.handleError<any>('updateGame'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param fallback - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', fallback: Observable<T> = EMPTY) {
    return (error: any): Observable<T> => {
      if (error.status === 304) {
        // This is working as intended
        return fallback;
      }
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      delete this.cache[error.url];
      return throwError(error);
    };
  }
}
