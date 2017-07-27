import { PersonalDashboardPage } from './app.po';

describe('personal-dashboard App', () => {
  let page: PersonalDashboardPage;

  beforeEach(() => {
    page = new PersonalDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
