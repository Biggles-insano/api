# API Incidentes

Esta API permite gestionar incidentes de soporte técnico. Se creó como parte de un ejercicio y permite crear y consultar incidentes de forma sencilla.

## Tecnologías Utilizadas

- **Node.js** y **Express**: Para construir la API REST.
- **MongoDB**: Base de datos NoSQL para almacenar los incidentes.
- **Mongoose**: ODM para manejar la conexión y las validaciones en MongoDB.

## Requisitos 

- Node.js: https://nodejs.org/.
- MongoDB:  
  - Como use mac hice esto 
  - Para instalar y ejecutar MongoDB:
    ```bash
    brew tap mongodb/brew
    brew install mongodb-community
    brew services start mongodb-community
    ```

## Instalación del Proyecto (Opciones)

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd api-incidentes
   
2. Más facil hacer un archivo y copiar el código, pero ahí cada quien

   

## POST

curl -X POST http://localhost:3000/incidents \
  -H "Content-Type: application/json" \
  -d '{"reporter": "Juan Perez", "description": "Problemas en la curva 3"}'

## GET

curl http://localhost:3000/incidents

