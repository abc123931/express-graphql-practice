import { Tags } from '../../model/entities/Tags';

export default interface TagsRepository {
  findTags(): Promise<Tags[]>;
}
