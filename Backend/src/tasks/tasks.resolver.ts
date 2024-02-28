import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { TasksService } from './tasks.service'
import { Task } from './task.entity'
import { CreateTaskInput } from './dto/create_task.input'

@Resolver((of) => Task)
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query((returns) => [Task]) // or Task[]
  tasks(): Promise<Task[]> {
    return this.tasksService.findAll()
  }

  @Mutation((returns) => Task)
  createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput): Promise<Task> {
    return this.tasksService.createTask(createTaskInput)
  }
}
