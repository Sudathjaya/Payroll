import { PhoenixClientPage } from './app.po';

describe('phoenix-client App', function() {
  let page: PhoenixClientPage;

  beforeEach(() => {
    page = new PhoenixClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
