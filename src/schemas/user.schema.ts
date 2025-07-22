import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Esquema de usuario para MongoDB
@Schema({ timestamps: true })
export class User extends Document {
  // Nombre del usuario
  @Prop({ required: true })
  name: string;

  // Email único del usuario
  @Prop({ required: true, unique: true })
  email: string;

  // Contraseña hasheada
  @Prop({ required: true })
  password: string;

  // Roles del usuario (por defecto: ['user'])
  @Prop({ type: [String], default: ['user'] })
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
