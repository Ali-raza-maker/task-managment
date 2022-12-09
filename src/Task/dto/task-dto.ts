import { PartialType } from '@nestjs/mapped-types';
import { Task } from '../entity/task.model';
export class CreateTaskDto extends Task {}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
