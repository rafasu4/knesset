import { Type } from 'class-transformer';
import { SearchDateDto } from './SearchDateDto.dto';
import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';

export class BillsRequestDto {
  @IsNotEmpty()
  @IsNumber()
  knessetNum: number;
  @IsNotEmpty()
  @IsNumber()
  mkId: number;

  //   @ValidateNested()
  //   @Type(() => SearchDateDto)
  //   searchDate?: SearchDateDto
}
