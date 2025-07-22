import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Esquema de categoría para MongoDB
@Schema({ timestamps: true })
export class Category extends Document {
  // Nombre único de la categoría
  @Prop({ required: true, unique: true })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
