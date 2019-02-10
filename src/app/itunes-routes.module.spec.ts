import { ItunesRoutesModule } from './itunes-routes.module';

describe('ItunesRoutesModule', () => {
  let itunesRoutesModule: ItunesRoutesModule;

  beforeEach(() => {
    itunesRoutesModule = new ItunesRoutesModule();
  });

  it('should create an instance', () => {
    expect(itunesRoutesModule).toBeTruthy();
  });
});
