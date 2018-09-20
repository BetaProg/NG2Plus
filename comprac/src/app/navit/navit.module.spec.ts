import { NavitModule } from './navit.module';

describe('NavitModule', () => {
  let navitModule: NavitModule;

  beforeEach(() => {
    navitModule = new NavitModule();
  });

  it('should create an instance', () => {
    expect(navitModule).toBeTruthy();
  });
});
