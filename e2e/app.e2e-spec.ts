import { TachyonProject2Page } from './app.po';

describe('tachyon-project2 App', function() {
  let page: TachyonProject2Page;

  beforeEach(() => {
    page = new TachyonProject2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
