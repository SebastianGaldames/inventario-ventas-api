# Inventario y Ventas API

API RESTful desarrollada con **NestJS** para la gestión de inventario y ventas. Permite administrar usuarios, productos, categorías y registrar ventas, ideal para pequeños negocios o como base para sistemas de gestión comercial.

## Descripción del Proyecto

Este proyecto proporciona una API robusta para:

- Registrar y autenticar usuarios.
- Gestionar productos y su inventario.
- Organizar productos en categorías.
- Registrar ventas y consultar historial.

La base de datos utilizada es **MongoDB**, accedida mediante **Mongoose**.

## Tecnologías principales

- [NestJS](https://nestjs.com/) (framework Node.js)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- JWT para autenticación
- TypeScript

## Estructura de módulos

- **Usuarios:** Registro, consulta y autenticación de usuarios.
- **Productos:** Alta, baja, modificación y consulta de productos.
- **Categorías:** Organización de productos por categorías.
- **Ventas:** Registro y consulta de ventas realizadas.
- **Autenticación:** Login y generación de tokens JWT.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd inventario-ventas-api
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno en un archivo `.env` (ejemplo):
   ```env
   DATABASE_URL=mongodb://localhost:27017/inventario
   JWT_SECRET=tu_clave_secreta
   PORT=3000
   ```

## Pruebas con Postman

En la carpeta `postman/` encontrarás una colección de Postman con ejemplos de peticiones para probar la API.

### ¿Cómo usar la colección?

1. Abre Postman.
2. Haz clic en "Importar" (Import).
3. Selecciona el archivo `.json` de la colección exportada ubicado en la carpeta `postman/`.
4. Una vez importada, podrás ejecutar las peticiones de ejemplo y pruebas directamente desde Postman.

Esto te permitirá probar fácilmente los endpoints principales de la API y verificar su funcionamiento.

## Uso con Docker

Puedes levantar todo el entorno (API y base de datos MongoDB) fácilmente usando Docker y docker-compose. Esto es ideal para desarrollo o pruebas rápidas.

### Levantar los servicios

```bash
docker-compose up --build
```

Esto iniciará dos servicios:

- **mongo:** Base de datos MongoDB, expuesta en el puerto 27017.
- **app:** La API de NestJS, expuesta en el puerto 3000.

La API estará disponible en `http://localhost:3000` y la base de datos en `mongodb://localhost:27017`.

Para detener los servicios:

```bash
docker-compose down
```

## Uso manual (sin Docker)

### Desarrollo

```bash
npm run start:dev
```

### Producción

```bash
npm run start:prod
```

La API estará disponible en `http://localhost:3000` (o el puerto configurado).

## Pruebas

- **Unitarias:**
  ```bash
  npm run test
  ```
- **End-to-end:**
  ```bash
  npm run test:e2e
  ```
- **Cobertura:**
  ```bash
  npm run test:cov
  ```

## Endpoints principales

- `/auth/login` — Autenticación de usuarios.
- `/users` — Gestión de usuarios.
- `/products` — Gestión de productos.
- `/categories` — Gestión de categorías.
- `/sales` — Registro y consulta de ventas.

## Despliegue

Puedes desplegar la aplicación en cualquier servidor Node.js. Asegúrate de tener configuradas las variables de entorno y acceso a una instancia de MongoDB.

## Licencia

MIT.

---

**Autor:** [Sebastián Galdames](https://www.linkedin.com/in/sebasti%C3%A1n-galdames-963660250/)

Desarrollado con ❤️ usando NestJS y MongoDB.
