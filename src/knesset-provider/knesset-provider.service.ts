import { Injectable } from '@nestjs/common';

@Injectable()
export class KnessetProviderService {
  getHello = () => {
    return 'Hello World!';
  };
}
