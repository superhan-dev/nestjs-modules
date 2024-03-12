import { Item } from '../entities/item.entity';

export class CreateItemDto {
  private name: string;
  private isPublic: boolean;

  toEntity(): Partial<Item> {
    return {
      name: this.name,
      isPublic: this.isPublic,
    };
  }
}
