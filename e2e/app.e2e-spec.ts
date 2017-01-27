import { TestCkeditorPage } from './app.po';

describe('test-ckeditor App', function() {
  let page: TestCkeditorPage;

  beforeEach(() => {
    page = new TestCkeditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
