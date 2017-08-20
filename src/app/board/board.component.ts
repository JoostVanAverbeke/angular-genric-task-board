import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import {Card} from "../card/card";
import {BoardService} from "./board.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Board} from "./board";
import {BoardSwimlanes} from "./board.swimlanes";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: Board;
  cards: Array<Card>;
  boardSwimlanes: BoardSwimlanes;

  constructor(private boardService: BoardService, private route: ActivatedRoute) {
    this.boardSwimlanes = new BoardSwimlanes();
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap)  => this.boardService.getBoard(+params.get('id')))
      .subscribe(board => this.boardSwimlanes.setBoard(board));
    this.route.paramMap
      .switchMap((params: ParamMap)  => this.boardService.getCardsOfBoard(+params.get('id')))
      .subscribe(cards => this.boardSwimlanes.setCardsInSwimlanes(cards));
  }

}
