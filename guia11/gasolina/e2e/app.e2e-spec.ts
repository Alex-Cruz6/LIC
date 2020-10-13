import { GasolinaPage } from './app.po';

describe('gasolina App', function() {
  let page: GasolinaPage;

  beforeEach(() => {
    page = new GasolinaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
