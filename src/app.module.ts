import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WuLiaoModule } from './wu-liao/wu-liao.module';

@Module({
  imports: [WuLiaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
