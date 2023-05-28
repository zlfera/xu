import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WuLiaoModule } from './wu-liao/wu-liao.module';
import { AppDataSource } from './data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WuLiao } from './wu-liao/entities/wu-liao.entity';

@Module({
  imports: [
    WuLiaoModule,
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([WuLiao]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
