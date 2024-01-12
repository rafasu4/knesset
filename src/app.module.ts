import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnessetProviderModule } from './knesset-provider/knesset-provicer.module';

@Module({
  imports: [ConfigModule.forRoot(), KnessetProviderModule],
})
export class AppModule {}
