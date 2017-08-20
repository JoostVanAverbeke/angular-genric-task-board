import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs, Response} from '@angular/http';
import {Board} from "./board";

import 'rxjs/add/operator/toPromise';
import {Card} from "../card/card";

@Injectable()
export class BoardService {
  private headers = new Headers({'Content-Type': 'application/json'});
  boardsUrl = 'http://localhost:3000/boards';

  constructor(private http: Http) {
  }

  getBoards(): Promise<Board[]> {
    return this.http.get(this.boardsUrl)
      .toPromise()
      .then(response => response.json().data as Board[])
      .catch(this.handleError);
  }

  getBoard(id: number): Promise<Board> {
    const url = `${this.boardsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Board)
      .catch(this.handleError);
  }

  update(board: Board): Promise<Board> {
    const url = `${this.boardsUrl}/${board.id}`;
    return this.http
      .put(url, JSON.stringify(board), <RequestOptionsArgs> {headers: this.headers})
      .toPromise()
      .then(() => board)
      .catch(this.handleError);
  }

  getCardsOfBoard(id: number): Promise<Card[]> {
    const url = `${this.boardsUrl}/${id}/cards`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Card[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
