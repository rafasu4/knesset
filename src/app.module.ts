import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { BillsModule } from './bills/bills.module'

@Module({
  imports: [ConfigModule.forRoot(), BillsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
