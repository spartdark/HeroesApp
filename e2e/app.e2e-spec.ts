import { MisegundaappPage } from './app.po';

describe('misegundaapp App', () => {
  let page: MisegundaappPage;

  beforeEach(() => {
    page = new MisegundaappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
