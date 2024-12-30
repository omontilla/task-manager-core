# Task Manager Core

Task Manager Core es una API backend desarrollada en NestJS para la gestión de tareas, con conexión a MongoDB como base de datos.

## Requisitos previos
* 	Node.js versión 22.12.0.
* 	MongoDB como base de datos.
* 	Gestor de paquetes npm.

## Estructura del Proyecto


        task-manager-core/ 
        src/
        ├──database/
        │   ├──database.module.ts      # Configuración de conexión a la base de datos MongoDB.
        ├── task/
        │   ├── controller/
        │   │   ├── task.controller.ts  # Controlador principal para las tareas (endpoints).
        │   │   ├── task.controller.spec.ts  # Tests para el controlador.
        │   ├── dto/
        │   │   ├── create-task.dto.ts  # DTO para la creación de tareas.
        │   │   ├── update-task.dto.ts  # DTO para la actualización de tareas.
        │   ├── schema/
        │   │   ├── task.schema.ts      # Esquema Mongoose para las tareas.
        │   ├── service/
        │   │   ├── task.service.ts     # Lógica de negocio y acceso a datos.
        │   │   ├── task.service.spec.ts  # Tests para el servicio.
        │   ├── task.module.ts          # Módulo principal de tareas.
        ├── app.module.ts               # Módulo principal de la aplicación.
        ├── main.ts                     # Punto de entrada principal de la aplicación.


## Despliegue local


* Clona este repositorio:

` git clone https://github.com/omontilla/task-manager-core`

* Accede al directorio del proyecto:

`cd task-manager-core`

* Instala las dependencias necesarias:

`npm install`


* Variables de entorno

Las siguientes variables de entorno son necesarias para el correcto funcionamiento de la aplicación:
1. [x] MONGO_URI: URL de conexión a la base de datos MongoDB.
2. [x] MONGOUSER: usario de conexion a la base de datos MongoDB
3. [x] MONGOPASSWORD: password de conexion a la base de datos MongoDB

Ejemplo de configuración.env:

    MONGO_URI=mongodb://localhost:27017/proyect
    MONGOUSER=project
    MONGOPASSWORD=123

* Inicia el servidor:

`npm run start`

Despliegue en producción

*	Swagger en producción: La documentación de la API está disponible en:
https://task-manager-core-production.up.railway.app/api/docs

Tecnologías utilizadas

1. [x] 	NestJS: Framework backend.
2. [x] 	Mongoose: ODM para la conexión a MongoDB.
3. [x] 	Swagger: Generación de documentación interactiva de la API.