import { Injectable } from '@nestjs/common'
import { Task } from './task.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateTaskInput } from './dto/create_task.input'

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private tasksRepository: Repository<Task>) {}
  async findAll(): Promise<Task[]> {
    // const task = new Task()
    // task.id = 1
    // task.title = 'new task'
    // return [task]
    return this.tasksRepository.find() // Select * from task
  }
  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const newTask = this.tasksRepository.create(createTaskInput)
    return this.tasksRepository.save(newTask)
  }
}
