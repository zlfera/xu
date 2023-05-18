import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWorld(): string {
    return 'World, hello'
  }
  getHello(): string {
    return 'Hello World! zlf';
  }
}
