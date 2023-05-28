import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WuLiaoService } from './wu-liao.service';
import { CreateWuLiaoDto } from './dto/create-wu-liao.dto';
import { UpdateWuLiaoDto } from './dto/update-wu-liao.dto';

@Controller('wu-liao')
export class WuLiaoController {
  constructor(private readonly wuLiaoService: WuLiaoService) {}

  @Post()
  create(@Body() createWuLiaoDto: CreateWuLiaoDto) {
    return this.wuLiaoService.create(createWuLiaoDto);
  }

  @Get()
  findAll() {
    return this.wuLiaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wuLiaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWuLiaoDto: UpdateWuLiaoDto) {
    return this.wuLiaoService.update(+id, updateWuLiaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wuLiaoService.remove(+id);
  }
}
