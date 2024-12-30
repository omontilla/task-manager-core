import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ description: 'Título de la tarea', example: 'Comprar' })
  @IsString({ message: 'El título debe ser una cadena de texto' })
  @MaxLength(10, { message: 'El título no puede tener más de 10 caracteres' })
  @Matches(/^[a-zA-Z0-9 ]*$/, {
    message: 'El título solo puede contener letras, números y espacios',
  })
  @IsNotEmpty({ message: 'El título es requerido' }) // Asegura que no esté vacío
  title: string;

  @ApiProperty({
    description: 'Descripción de la tarea',
    example: 'Ir al supermercado',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @MaxLength(150, {
    message: 'La descripción no puede tener más de 150 caracteres',
  })
  description?: string;

  @ApiProperty({
    description: 'Estado de la tarea',
    example: false,
    default: false,
  })
  @IsOptional()
  completed?: boolean;
}