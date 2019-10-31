import TagsRepository from '../../application/repository/TagsRepository';
import { Tags } from '../../model/entities/Tags';

export default class TagsDataSource implements TagsRepository {
  async findTags(): Promise<Tags[]> {
    return await Tags.find();
  }
}
