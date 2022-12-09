import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  Title: string;

  @Prop()
  property: string;

  @Prop()
  Description: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
