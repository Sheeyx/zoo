import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDeatil(): string {
    return 'Detailer!';
  }
  
}
