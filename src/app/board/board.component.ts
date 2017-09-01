import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import {Card} from "../card/card";
import {BoardService} from "./board.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Board} from "./board";
import {BoardSwimlanes} from "./board.swimlanes";
import {DragulaService} from "ng2-dragula";
import {ModificationStatus} from "../modification/modification.status";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: Board;
  cards: Array<Card>;
  boardSwimlanes: BoardSwimlanes;

  constructor(private boardService: BoardService,
              private route: ActivatedRoute,
              private dragulaService: DragulaService) {
    this.boardSwimlanes = new BoardSwimlanes();
    dragulaService.setOptions('first-bag', {
      accepts: function (el: HTMLElement, target: HTMLElement, source: HTMLElement, sibling: HTMLElement) {

        let sourceStatus = <ModificationStatus> Number(source.id);
        let targetStatus = <ModificationStatus> Number(target.id);
        console.debug({el, target, source, sibling});
        return sourceStatus == targetStatus; // elements can be dropped in any of the `containers` by default
      }
    })
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap)  => this.boardService.getBoard(+params.get('id')))
      .subscribe(board => this.boardSwimlanes.setBoard(board));
    this.route.paramMap
      .switchMap((params: ParamMap)  => this.boardService.getCardsOfBoard(+params.get('id')))
      .subscribe(cards => this.boardSwimlanes.setCardsInSwimlanes(cards));
  }

  /*
    Target Modification Status is represented in the Column
    Source Modification Status is represented by the Row
    Each cell value represents if it allowed to change to that Modification Status

      Target ->ANL   ARVW   COD   CRVW   MRG   TST   DOC   FRVW   CMT

      ANL       X     X
      ARVW      X     X      X
      COD             X      X     X
      CRVW                   X     X     X
      MRG                    X           X      X
      TST                    X                  X    X
      DOC                    X                       X      X
      FRVW      X            X                              X     X
      CMT                                                         X
   */

}
