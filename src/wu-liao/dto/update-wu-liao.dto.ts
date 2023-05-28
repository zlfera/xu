import { PartialType } from '@nestjs/mapped-types';
import { CreateWuLiaoDto } from './create-wu-liao.dto';

export class UpdateWuLiaoDto extends PartialType(CreateWuLiaoDto) {}
