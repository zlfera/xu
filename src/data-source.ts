import { DataSource } from 'typeorm';
import { WuLiao } from './wu-liao/entities/wu-liao.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'xu',
  entities: [WuLiao],
  migrations: ['./migrations/*.ts'],
});
