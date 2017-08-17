import { Component, OnInit } from '@angular/core';
import {Board} from "../board/board";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  boards: Array<Board> = [
    <Board> { id: 1, title: 'Sprint 1', color: 'lightblue'},
    <Board> { id: 2, title: 'Sprint 2', color: 'lightgreen'},
    <Board> { id: 3, title: 'Sprint 3', color: 'lightpink'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
