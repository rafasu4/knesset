import { Expose } from 'class-transformer';
import { IsValidDate } from 'src/assets/decorators';

@Expose()
export class SearchDateDto {
  @IsValidDate()
  fromData!: string;

  @IsValidDate()
  toDate!: string;
}
