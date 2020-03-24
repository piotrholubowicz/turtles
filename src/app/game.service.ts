import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Game, Color } from './game';
import { GAMES } from './mock-games';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  private heroesUrl = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.heroesUrl)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<Game[]>('getHeroes', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getGame(id: number): Observable<Game> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Game>(url).pipe(
      tap(_ => console.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Game>(`getHero id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero (hero: Game): Observable<Game> {
    return this.http.post<Game>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Game) => console.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Game>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Game | number): Observable<Game> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Game>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Game>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero (hero: Game): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
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
