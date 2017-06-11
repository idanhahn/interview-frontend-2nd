import { WaycarePlatformMoPage } from './app.po';

describe('waycare-platform-mo App', () => {
  let page: WaycarePlatformMoPage;

  beforeEach(() => {
    page = new WaycarePlatformMoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
