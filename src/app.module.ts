// Módulo principal de la aplicación NestJS. Importa y configura los módulos globales y de dominio.
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'; // Importa ConfigModule para variables de entorno
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    // Habilita el uso de variables de entorno (.env) de forma global
    ConfigModule.forRoot({ isGlobal: true }),
    // Conexión a MongoDB usando la variable de entorno DATABASE_URL
    MongooseModule.forRoot(
      (() => {
        const dbUrl = process.env.DATABASE_URL;
        if (!dbUrl) {
          throw new Error('DATABASE_URL is not defined');
        }
        return dbUrl;
      })(),
    ),
    // Módulos de dominio
    AuthModule,
    UsersModule,
    ProductsModule,
    SalesModule,
    CategoriesModule,
  ],
  controllers: [AppController], // Controlador raíz
  providers: [AppService], // Servicio raíz
})
export class AppModule {}
