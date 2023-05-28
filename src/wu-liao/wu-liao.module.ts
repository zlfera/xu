import { Module } from '@nestjs/common';
import { WuLiaoService } from './wu-liao.service';
import { WuLiaoController } from './wu-liao.controller';

@Module({
  controllers: [WuLiaoController],
  providers: [WuLiaoService]
})
export class WuLiaoModule {}
