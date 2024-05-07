# Nombre del Proyecto Frontend

## Resumen
Este es el frontend diseñado para interactuar con el backend de Api-Manager. La vista es simple, una tabla que muestra las solicitudes de compra realizadas por usuarios en la plataforma. La tabla ofrece paginado y filtrado por texto en cada columna. La aplicación fue construida utilizando Vue.js como framework y Render como servidor de despliegue, el cual levantó una instacia de la app en este link: https://dashboard-kxki.onrender.com.

## Componente PurchaseRequestTable
Este es el único componente de la aplicación. Es una tabla HTML, la que se compone de encabezados, filtros de texto, registros paginados de 9 en 9, botones para viajar a las páginas vecinas. Además podemos ver que cada orden de compra cuenta con un botón "Detalles", que al apretarse, despliega los articulos comprados por ese usuario.

El componente cuenta con métodos internos para recibir la información del backend, filtrar la página, actualizar la página, expandir o colapsar los detalles de una compra y formatear las fechas.

Por último, vemos un apartado con los estilos de la tabla.

### Dependencias
- **axios**: Con axios nos comunicamos con el backend.
- **bootstrap**: Framework de CSS utilizado para el diseño rápido de UI.
- **vue3**: Framework progresivo para construir interfaces de usuario.

## ¿Qué me gustaría agregarle a esta aplicación?

- Un login para el usuario que necesita consultar esta tabla. Probablemente es un administrador de negocio y debemos proteger esta información de las personas naturales.
- Pruebas Unitarias:
    - verifiquen la solicitud al backend
    - verifiquen el paginado
    - verifiquen el filtrado
    - verifiquen el comportamiento del método toggleDetails que expande y cierra el detalle de las compras
- Pruebas de Integración:
    - Asegurar que los cambios en los filtros actualicen filteredRequests y reinicien la paginación.
    - Probar que al cambiar currentPage se llama a updatePage y se muestra correctamente la nueva página de datos.
