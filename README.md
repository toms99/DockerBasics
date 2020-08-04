# DockerBasics
 Un PoC para Docker y Docker compose. Implementa NodeJS, MongoDB, Express, Mongoose, Apache HTTP.
 
 ### Resumen
 
 Este repositorio permite levantar tres containers: apache HTTPS, custom-made NodeJS app y una base de datos con MongoDB. Estos están definidos en el archivo `docker-compose.yml` y cada servicio se llama: webserver, node-app y mongo respectivamente.
 
 ### Comandos de la consola

Para correr los containers se debe abrir una terminal en el directorio donde se encuentre el proyecto y ejecutar los siguientes comandos:

`docker-compose build`
`docker-compose up`

Debido a que el fin del proyecto es la implementación de los containers, a la interfaz no se le dio atención. Por lo tanto, para ver los cambios se puede visulizar desde la terminal o usando la aplicación de escritorio  **Studio-3T**. Esta aplicación se puede instalar usando de guía este [tutorial](https://studio3t.com/knowledge-base/articles/installation/).

Por instalada la aplicación, basta con crear una nueva conexión al puerto 27107 y se recibirá la información de la base de datos.

El código para las acciones de CRUD de la base de datos está implementado, aunque la tarea que ejecutará al correr por primera vez será únicamente crear un nuevo usuario y retornar la base de datos actual. 

Si desea efectuar las acciones restantes para CRUD solamente se necesita descomentar el código correspondiente a la acción en el archivo index.mjs.



