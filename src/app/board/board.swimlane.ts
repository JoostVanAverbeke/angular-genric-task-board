import {Card} from '../card/card';
import {ModificationStatus, ModificationStatusHelper} from "../modification/modification.status";

export class BoardSwimlane {
  status: ModificationStatus;
  cards: Array<Card>;

  constructor(status: ModificationStatus, cards: Array<Card>) {
    this.status = status;
    this.cards = cards;
  }

  getStatusString(): string {
    return ModificationStatusHelper.toString(this.status);
  }
}
