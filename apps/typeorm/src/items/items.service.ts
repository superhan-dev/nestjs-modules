import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const item = new Item(createItemDto.toEntity());
    return await this.itemRepository.save(item);
  }

  async findAll() {
    return await this.itemRepository.find();
  }

  async findOne(id: string) {
    return await this.itemRepository.findOne({ where: { id: id } });
  }

  async update(id: string, updateItemDto: UpdateItemDto): Promise<any> {
    let item = await this.itemRepository.findOne({ where: { id: id } });
    if (!item) {
      throw new NotFoundException();
    }
    item = Object.assign(item, updateItemDto);
    const result = await this.itemRepository.update(id, item);
    if (result.affected === 1) {
      return 'Ok';
    }
  }

  async remove(id: string) {
    return await this.itemRepository.delete(id);
  }
}
