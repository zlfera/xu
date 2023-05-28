import { Injectable } from '@nestjs/common';
import { CreateWuLiaoDto } from './dto/create-wu-liao.dto';
import { UpdateWuLiaoDto } from './dto/update-wu-liao.dto';

@Injectable()
export class WuLiaoService {
  create(createWuLiaoDto: CreateWuLiaoDto) {
    return 'This action adds a new wuLiao';
  }

  findAll() {
    return `This action returns all wuLiao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wuLiao`;
  }

  update(id: number, updateWuLiaoDto: UpdateWuLiaoDto) {
    return `This action updates a #${id} wuLiao`;
  }

  remove(id: number) {
    return `This action removes a #${id} wuLiao`;
  }
}
