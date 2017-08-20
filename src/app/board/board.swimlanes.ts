import {Board} from './board';
import {BoardSwimlane} from './board.swimlane';
import {Card} from "../card/card";
import {ModificationStatus} from "../modification/modification.status";

export class BoardSwimlanes {
  board: Board;
  swimlanes: Array<BoardSwimlane>;

  constructor() {
    this.swimlanes = new Array<BoardSwimlane>();
  }

  setBoard(board :Board): void {
    this.board = board;
  }

  getBoardTitle(): string {
    return this.board ? this.board.title : "";
  }

  setCardsInSwimlanes(cards :Array<Card>): void {
    this.swimlanes[0] = new BoardSwimlane(ModificationStatus.Analysis, cards.filter(this.statusAnalysis))
    this.swimlanes[1] = new BoardSwimlane(ModificationStatus.AnalysisReview, cards.filter(this.statusAnalysisReview))
    this.swimlanes[2] = new BoardSwimlane(ModificationStatus.Code, cards.filter(this.statusCode))
    this.swimlanes[3] = new BoardSwimlane(ModificationStatus.CodeReview, cards.filter(this.statusCodeReview))
    this.swimlanes[4] = new BoardSwimlane(ModificationStatus.Merge, cards.filter(this.statusMerge))
    this.swimlanes[5] = new BoardSwimlane(ModificationStatus.Test, cards.filter(this.statusTest))
    this.swimlanes[6] = new BoardSwimlane(ModificationStatus.Documentation, cards.filter(this.statusDocumentation))
    this.swimlanes[7] = new BoardSwimlane(ModificationStatus.FinalReview, cards.filter(this.statusFinalReview))
    this.swimlanes[8] = new BoardSwimlane(ModificationStatus.Complete, cards.filter(this.statusComplete))
  }

  private statusAnalysis(element: Card, index: number, array: Array<Card>): boolean {
    return BoardSwimlanes.hasStatus(element, ModificationStatus.Analysis);
  }
  private statusAnalysisReview(element: Card, index: number, array: Array<Card>): boolean {
    return BoardSwimlanes.hasStatus(element, ModificationStatus.AnalysisReview);
  }
  private statusCode(element: Card, index: number, array: Array<Card>): boolean {
    return BoardSwimlanes.hasStatus(element, ModificationStatus.Code);
  }
  private statusCodeReview(element: Card, index: number, array: Array<Card>): boolean {
    return BoardSwimlanes.hasStatus(element, ModificationStatus.CodeReview);
  }
  private statusMerge(element: Card, index: number, array: Array<Card>): boolean {
    return BoardSwimlanes.hasStatus(element, ModificationStatus.Merge);
  }
  private statusTest(element: Card, index: number, array: Array<Card>): boolean {
    return BoardSwimlanes.hasStatus(element, ModificationStatus.Test);
  }
  private statusDocumentation(element: Card, index: number, array: Array<Card>): boolean {
    return BoardSwimlanes.hasStatus(element, ModificationStatus.Documentation);
  }
  private statusFinalReview(element: Card, index: number, array: Array<Card>): boolean {
    return BoardSwimlanes.hasStatus(element, ModificationStatus.FinalReview);
  }
  private statusComplete(element: Card, index: number, array: Array<Card>): boolean {
    return BoardSwimlanes.hasStatus(element, ModificationStatus.FinalReview);
  }


  private static hasStatus(card: Card, modificationStatus: ModificationStatus): boolean {
    return (card.status == modificationStatus);
  }
}
