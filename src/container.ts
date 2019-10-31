import UserResolver from './presentation/resolvers/UserResolver';
import UserDataSource from './infrastructure/datasources/UserDataSource';
import TagsDataSource from './infrastructure/datasources/TagsDataSource';
import TagResolver from './presentation/resolvers/TagResolver';

export default class Container {
  readonly userDatasource: UserDataSource;
  readonly userResolver: UserResolver;
  readonly tagsDatasource: TagsDataSource;
  readonly tagResolver: TagResolver;

  constructor() {
    this.userDatasource = new UserDataSource();
    this.userResolver = new UserResolver(this.userDatasource);
    this.tagsDatasource = new TagsDataSource();
    this.tagResolver = new TagResolver(this.tagsDatasource);
  }
}
