import { Component, OnInit } from '@angular/core';
import {Board} from "../board/board";
import {BoardService} from "../board/board.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
//   boards: Array<Board> = [
//     <Board> { id: 1, title: 'Sprint 1', color: 'lightblue'},
//     <Board> { id: 2, title: 'Sprint 2', color: 'lightgreen'},
//     <Board> { id: 3, title: 'Sprint 3', color: 'lightpink'}
//   ];
  boards: Array<Board>;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getBoards().then(boards => this.boards = boards);
  }

}
