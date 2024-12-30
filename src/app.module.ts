import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TaskModule, DatabaseModule],
})
export class AppModule {}
