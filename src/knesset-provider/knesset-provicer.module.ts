import { Module } from '@nestjs/common';
import { KnessetProviderController } from './knesset-provider.controller';
import { KnessetProviderService } from './knesset-provider.service';

@Module({
  imports: [],
  controllers: [KnessetProviderController],
  providers: [KnessetProviderService],
})
export class KnessetProviderModule {}
