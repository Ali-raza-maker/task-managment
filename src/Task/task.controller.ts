import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Req,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { Request } from 'express';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/task-dto';
import { UpdateTaskDto } from './dto/task-dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() createEmployeeDto: CreateTaskDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(file);
    console.log('wmbcvsdjb', createEmployeeDto);
    return this.taskService.create(createEmployeeDto, file);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('wbhjdj', file);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateTaskDto) {
    return this.taskService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
