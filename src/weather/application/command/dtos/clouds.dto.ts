import { IsNotEmpty, IsNumber } from 'class-validator';

export class CloudsDto {
  @IsNumber()
  @IsNotEmpty()
  all: number;
}
