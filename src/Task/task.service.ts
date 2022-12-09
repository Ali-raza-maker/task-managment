import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/task-dto';
import { UpdateTaskDto } from './dto/task-dto';
import { Task, TaskDocument } from './entity/task.model';
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dq9xkir3y',
  api_key: '982526922974173',
  api_secret: '8C7rl0qMlnjdU6sLycUkTLrrA34',
  secure: true,
});

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private readonly userModel: Model<TaskDocument>,
  ) {}

  async create(
    createEmployeeDto: CreateTaskDto,
    file: any,
  ): Promise<TaskDocument> {
    const employee = new this.userModel(createEmployeeDto);
    // cloudinary.uploder.upload(file);
    console.log('file', file);
    cloudinary.v2.uploader
      .upload(file)
      .then((result: any) => console.log(result));
    return employee.save();
  }

  async findAll(): Promise<TaskDocument[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    const user = this.userModel.findById(id);
    if (!user) {
      return {
        message: 'User not found',
        errorCode: 404,
      };
    }
    return user;
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateTaskDto,
  ): Promise<TaskDocument> {
    return this.userModel.findByIdAndUpdate(id, updateEmployeeDto);
  }

  async remove(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
}
