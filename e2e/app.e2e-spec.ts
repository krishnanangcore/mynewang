import { MynewprjPage } from './app.po';

describe('mynewprj App', () => {
  let page: MynewprjPage;

  beforeEach(() => {
    page = new MynewprjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
