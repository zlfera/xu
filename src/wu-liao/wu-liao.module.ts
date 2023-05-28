import { Module } from '@nestjs/common';
import { WuLiaoService } from './wu-liao.service';
import { WuLiaoController } from './wu-liao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WuLiao } from './entities/wu-liao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WuLiao])],
  controllers: [WuLiaoController],
  providers: [WuLiaoService],
})
export class WuLiaoModule {}
