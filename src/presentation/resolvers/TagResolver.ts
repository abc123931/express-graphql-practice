import TagUsecase from '../../application/usecase/TagUsecase';
import TagsRepository from '../../application/repository/TagsRepository';
import { Tags } from '../../model/entities/Tags';

export default class TagResolver {
  private readonly tagUsecase: TagUsecase;

  constructor(tagsRepository: TagsRepository) {
    this.tagUsecase = new TagUsecase(tagsRepository);
  }

  async tags(): Promise<Tags[]> {
    return await this.tagUsecase.getTags();
  }
}
