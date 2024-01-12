import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { KnessetProviderService } from './knesset-provider.service';
import { BillsRequestDto } from 'src/dto/BillsRequestDto.dto.';

@Controller('knesset')
export class KnessetProviderController {
  constructor(private readonly knessetService: KnessetProviderService) {}

  @Post()
  getHello(@Body() billsRequest: BillsRequestDto): string {
    return this.knessetService.getHello();
  }
}
