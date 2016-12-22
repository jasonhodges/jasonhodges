import { JasonhodgesPage } from './app.po';

describe('jasonhodges App', function() {
  let page: JasonhodgesPage;

  beforeEach(() => {
    page = new JasonhodgesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
