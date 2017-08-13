import { AngularGenricTaskBoardPage } from './app.po';

describe('angular-genric-task-board App', () => {
  let page: AngularGenricTaskBoardPage;

  beforeEach(() => {
    page = new AngularGenricTaskBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
