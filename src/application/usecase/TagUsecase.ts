import TagsRepository from '../repository/TagsRepository';
import { Tags } from '../../model/entities/Tags';

export default class TagUsecase {
  private readonly tagsRepository: TagsRepository;

  constructor(tagsRepository: TagsRepository) {
    this.tagsRepository = tagsRepository;
  }

  async getTags(): Promise<Tags[]> {
    return this.tagsRepository.findTags();
  }
}
