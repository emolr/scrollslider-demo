import { ScrollSlideTestPage } from './app.po';

describe('scroll-slide-test App', function() {
  let page: ScrollSlideTestPage;

  beforeEach(() => {
    page = new ScrollSlideTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
