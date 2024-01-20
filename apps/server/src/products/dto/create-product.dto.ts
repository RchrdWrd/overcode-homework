import { IsBoolean, IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger'

export class CreateProductDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(20)
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  description: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  price: number;
}