import { SueldosPage } from './app.po';

describe('sueldos App', function() {
  let page: SueldosPage;

  beforeEach(() => {
    page = new SueldosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
