import { applyDecorators } from '@nestjs/common';
import { IsString, Matches } from 'class-validator';

export function IsValidDate() {
  return applyDecorators(
    IsString(),
    Matches(/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/),
  );
}
