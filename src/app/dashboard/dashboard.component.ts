import { Component, OnInit } from '@angular/core';
import {Board} from "../board/board";
import {BoardService} from "../board/board.service";
import {Router} from "@angular/router";

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

  constructor(private boardService: BoardService, private router: Router) {
  }

  ngOnInit() {
    this.boardService.getBoards().then(boards => this.boards = boards);
  }

  showBoard(id) {
    this.router.navigate(['/boards/' + id]);
  }

}
