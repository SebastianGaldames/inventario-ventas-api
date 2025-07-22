import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

// Esquema de venta para MongoDB
@Schema({ timestamps: true })
export class Sale extends Document {
  // Referencia al producto vendido
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  productId: Types.ObjectId;

  // Referencia al usuario que realizó la venta
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  // Cantidad de productos vendidos
  @Prop({ required: true })
  quantity: number;

  // Total de la venta
  @Prop({ required: true })
  total: number;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
