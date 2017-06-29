import { MyDemoPage } from './app.po';

describe('my-demo App', () => {
  let page: MyDemoPage;

  beforeEach(() => {
    page = new MyDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
