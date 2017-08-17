import { Component, OnInit } from '@angular/core';
import {Card} from "../card/card";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  cards: Array<Card> = [
    <Card> { id: 1, title: 'G_HOML_00180', shortDescription: 'Description of G_HOML_00180', content: 'This is a long description'},
    <Card> { id: 2, title: 'G_ADT-00130', shortDescription: 'Description of G_ADT-00130', content: 'This a very long description'},
    <Card> { id: 3, title: 'GLIMS_PI-00201', shortDescription: 'Description of GLIMS_PI-00201',  content: 'This is the longest description'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
