import { MProjPage } from './app.po';

describe('m-proj App', function() {
  let page: MProjPage;

  beforeEach(() => {
    page = new MProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
