import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query
} from "@nestjs/common";
import { TaskService } from '../service/task.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Task } from "../schema/task.schema";

@ApiTags('task')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva tarea' })
  @ApiResponse({
    status: 201,
    description: 'La tarea fue creada exitosamente.',
  })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las tareas filtradas y ordenadas' })
  @ApiResponse({ status: 200, description: 'Lista de tareas', type: [Task] })
  @ApiQuery({
    name: 'Estatus',
    required: false,
    description: 'Filtra las tareas por su estado',
    type: Boolean,
  })
  @ApiQuery({
    name: 'title_like',
    required: false,
    description: 'Filtra las tareas por título',
    type: String,
  })
  @ApiQuery({
    name: 'description_like',
    required: false,
    description: 'Filtra las tareas por descripción',
    type: String,
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    description: 'Campo por el cual ordenar las tareas',
    type: String,
  })
  @ApiQuery({
    name: 'sortOrder',
    required: false,
    description: 'Orden de clasificación: asc o desc',
    type: String,
    enum: ['asc', 'desc'],
  })
  async findAll(
    @Query('Estatus') status: boolean,
    @Query('title_like') titleLike: string,
    @Query('description_like') descriptionLike: string,
    @Query('_sort') sortBy: string,
    @Query('_order') sortOrder: 'asc' | 'desc',
  ) {
    return this.taskService.findAll({ status, titleLike, descriptionLike }, sortBy, sortOrder);
  }


  @Get(':id')
  @ApiOperation({ summary: 'Obtener una tarea por ID' })
  @ApiResponse({ status: 200, description: 'La tarea fue encontrada.' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada.' })
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una tarea por ID' })
  @ApiResponse({ status: 200, description: 'La tarea fue actualizada.' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada.' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una tarea por ID' })
  remove(@Param('id') id: string) {
    this.taskService.remove(id);
  }
}
