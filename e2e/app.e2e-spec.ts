import { MoneyAppPage } from './app.po';

describe('money-app App', function() {
  let page: MoneyAppPage;

  beforeEach(() => {
    page = new MoneyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
