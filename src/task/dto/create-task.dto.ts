import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'Título de la tarea', example: 'Comprar leche' })
  title: string;

  @ApiProperty({ description: 'Descripción de la tarea', example: 'Ir al supermercado', required: false })
  description?: string;

  @ApiProperty({ description: 'Estado de la tarea', example: false, default: false })
  completed?: boolean;
}