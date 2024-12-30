import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './schema/task.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class TaskService {

  private readonly MESSAGES = {
    INVALID_ID: 'El id suministrado no es valido',
    TASK_NOT_FOUND: 'La tarea no fue encontrada',
  };

  constructor(@InjectModel(Task.name) private readonly taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = new this.taskModel(createTaskDto);
    return await newTask.save();
  }

  async findAll(filter: Record<string, any> = {}, sortBy: string = '', sortOrder: 'asc' | 'desc' = 'asc'): Promise<Task[]> {
    const query = this.taskModel.find(filter);

    if (sortBy) {
      query.sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 });
    }

    return await query.exec();
  }

  async findOne(id: string): Promise<Task | null> {
    return this.taskValidation(id);
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task | null> {
    await this.taskValidation(id);
    return await this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
  }

  async remove(id: string) {
    const taskDB = await this.taskValidation(id);
    await this.taskModel.findByIdAndDelete(taskDB.id).exec();
  }

  private async taskValidation(id: string): Promise<Task> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new HttpException(this.MESSAGES.INVALID_ID, HttpStatus.NOT_FOUND);
    }

    const task = await this.taskModel.findById(id).exec();
    if (!task) {
      throw new HttpException(this.MESSAGES.TASK_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    return task;
  }
}