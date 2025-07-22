import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Punto de entrada principal de la aplicación
async function bootstrap() {
  // Crea la aplicación NestJS usando el módulo principal
  const app = await NestFactory.create(AppModule);
  // Inicia el servidor en el puerto definido por la variable de entorno PORT o 3000 por defecto
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
