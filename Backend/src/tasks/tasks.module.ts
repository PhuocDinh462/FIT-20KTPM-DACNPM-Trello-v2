import { Module } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { TasksResolver } from './tasks.resolver'
import { Task } from './task.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksService, TasksResolver, Task],
})
export class TasksModule {}
