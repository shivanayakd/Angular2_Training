import { AppTrainingPage } from './app.po';

describe('app-training App', () => {
  let page: AppTrainingPage;

  beforeEach(() => {
    page = new AppTrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
