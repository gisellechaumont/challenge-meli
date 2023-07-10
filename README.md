# Challenge Frontend - MELI 

La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de
resultados, y la descripción del detalle del producto.

Tiene una pequeña api con dos endpoints que traen la información necesaria para la construcción de las vistas.

## Stack utilizado

Cliente:
- Nextjs 
- Sass

Servidor:
- Nodejs
- Express

## Configuración del proyecto

1. Clona este repositorio 
```bash
git clone https://github.com/gisellechaumont/challenge-meli.git
```


2. Instalación y despliegue

Cliente:

```bash
cd client
npm install
npm run dev
```



Servidor:
```bash
cd server
npm install
npm run dev
```

Por defecto, el cliente va a correr en localhost:3000 y el servidor en localhost:5000.

## Funcionalidades principales

En la página principal se visualiza la caja de búsqueda. En la misma, se ingresa el producto a buscar y se envía el formulario. Se navega hasta la vista de resultados de búsqueda, visualizando solo 4 productos.  Dado un id de producto, navego directamente a la vista de detalle de producto.

## Consideraciones 

- Se desarrollo el frontend con Nextjs por ser un framework SSR y se optó por la versión 12.2 debido a la familiaridad con dicha versión.
- La aplicación cuenta con un diseño responsive, logrado mediante la adaptación de la disposición de algunos componentes en función de la resolución de pantalla.
- Se implementó una arquitectura sencilla en el servidor. En caso de disponer de más tiempo, sería recomendable documentar los endpoints utilizando Swagger para facilitar su comprensión por parte de otros desarrolladores.
- Con el objetivo de optimizar el rendimiento y la carga del cliente, se implementó una limitación en la cantidad de productos desde el servidor.
- En este primera versión, en la pantalla de detalles del producto, no se incluyó el breadcrumb. Esto debido a que los datos necesarios para su construcción no estaban disponibles desde el lado del servidor, según los requerimientos del endpoint. Sin embargo, en caso de que sea posible modificar la URL de la vista de detalle, se consideraría enviar las categorías como parámetros de consulta (query) al navegar hacia esa pantalla. Considero que es una buena solución por ser una aplicación pequeña.
- Se adoptó una arquitectura escalable desde el frontend. Esta arquitectura permite una fácil incorporación de nuevas funcionalidades, así como la gestión eficiente de cambios y mejoras.



