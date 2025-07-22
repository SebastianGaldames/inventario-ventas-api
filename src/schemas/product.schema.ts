import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

// Esquema de producto para MongoDB
@Schema({ timestamps: true })
export class Product extends Document {
  // Nombre del producto
  @Prop({ required: true })
  name: string;

  // Descripción opcional del producto
  @Prop()
  description?: string;

  // Precio del producto
  @Prop({ required: true })
  price: number;

  // Stock disponible
  @Prop({ required: true })
  stock: number;

  // Referencia a la categoría (relación)
  @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
  category: Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
