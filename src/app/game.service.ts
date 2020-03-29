import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of, timer, Subject } from "rxjs";
import { catchError, map, tap, switchMap, distinctUntilChanged, share } from "rxjs/operators";

import { Game, Color } from "./game";

@Injectable({
  providedIn: "root"
})
export class GameService {
  // private gamesUrl = 'https://turtles-server--piotrholubowicz.repl.co/games/';  // URL to web api
  private gamesUrl = "https://turtles-server.herokuapp.com/games"; // URL to web api
  private games$: Observable<Game[]> = timer(0, 1000).pipe(
    switchMap(_ => this.fetchGames()),  // a new http request on every tick
    share(),  // create a new Subject, which will act as a proxy
  );
  private perGame$ = new Map<number, Observable<Game>>();

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  static objToMap(obj) {
    const mp = new Map();
    obj.forEach(entry => {
      mp.set(entry[0], entry[1]);
    });
    return mp;
  };

  /** GET games from the server */
  getGames(): Observable<Game[]> {
    return this.games$;
  }

  fetchGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl).pipe(
      // tap(_ => console.log("fetched games")),
      distinctUntilChanged(),
      catchError(this.handleError<Game[]>("getGames", []))
    );
  }

  /** GET game by id. Will 404 if id not found */
  getGame(id: number): Observable<Game> {
    if (!this.perGame$.has(id)) {
      const game$ = timer(0, 1000).pipe(
        switchMap(_ => this.fetchGame(id)),  // a new http request on every tick
        share(),  // create a new Subject, which will act as a proxy
      );
      this.perGame$.set(id, game$);
    }
    return this.perGame$.get(id);
  }

  fetchGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get<Game>(url).pipe(
      // tap(_ => console.log(`fetched game id=${id}`)),
      distinctUntilChanged(),
      tap((game: Game) => {
        game.hands = GameService.objToMap(game.hands);
        game.colors = GameService.objToMap(game.colors);
      }),
      catchError(this.handleError<Game>(`getGame id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new game to the server */
  addGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.gamesUrl, game, this.httpOptions).pipe(
      tap((newGame: Game) => console.log(`added game w/ id=${newGame.id}`)),
      tap((game: Game) => console.log(game)),
      catchError(this.handleError<Game>("addGame"))
    );
  }

  /** DELETE: delete the game from the server */
  deleteGame(game: Game | number): Observable<Game> {
    const id = typeof game === "number" ? game : game.id;
    const url = `${this.gamesUrl}/${id}`;

    return this.http.delete<Game>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted game id=${id}`)),
      catchError(this.handleError<Game>("deleteHero"))
    );
  }

  /** PUT: update the game on the server */
  updateGame(game: Game): Observable<any> {
    return this.http.put(this.gamesUrl, game, this.httpOptions).pipe(
      tap(_ => console.log(`updated game id=${game.id}`)),
      catchError(this.handleError<any>("updateGame"))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
