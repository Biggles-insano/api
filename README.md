# API Incidentes

Esta API permite gestionar incidentes de soporte técnico. Se creó como parte de un ejercicio y permite crear y consultar incidentes de forma sencilla. Para aclarar. La que dice api es la de verdad (osea la que se conecta a mongo de forma online) la que dice server esta ahí en caso no funcione la otra (osea todo 100% local)

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
  -d '{"reporter": "Juan Perez", "description": "Problemas con la impresora"}'

## GET

curl http://localhost:3000/incidents

los demás

curl http://localhost:3000/incidents/67ecc175040c9617b14d8481

curl -X PUT http://localhost:3000/incidents/67ecc175040c9617b14d8481 \
  -H "Content-Type: application/json" \
  -d '{"status": "en proceso"}'


  curl -X DELETE http://localhost:3000/incidents/67ecc175040c9617b14d8481



UPDATE:

Ahora solo hay que hacer esto: docker-compose up --build -d
y aparentemente debería de funcionar todo




