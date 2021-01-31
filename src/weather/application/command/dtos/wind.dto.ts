import { IsNotEmpty, IsNumber } from 'class-validator';

export class WindDto {
  @IsNumber()
  @IsNotEmpty()
  speed: number;

  @IsNumber()
  @IsNotEmpty()
  direction: number;
}
