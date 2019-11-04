## Tabla de contenido

- [**Ambientes**](#ambientes)
- [**Ejecución de la aplicación**](#ejecuci%C3%B3n-de-la-aplicaci%C3%B3n)
- [**Estructura del proyecto**](#estructura-del-proyecto)
  - [**App module**](#app-module)
    - [**Layout**](#layout)
  - [**Core module**](#core-module)
    - [**Models**](#models)
    - [**Services**](#services)
      - [**LocalStorage**](#localstorage)
      - [**orders**](#orders)
      - [**Products**](#products)
  - [**Material module**](#material-module)
  - [**Orders module**](#orders-module)
    - [**Orders component**](#orders-component)
  - [**Products module**](#products-module)
    - [**Product**](#product)
    - [**Products**](#products-1)
    - [**request**](#request)
  - [**Shared module**](#shared-module)
    - [**components**](#components)
      - [**Header**](#header)
    - [**constants**](#constants)


# **Ambientes**
Para que todo funcione correctamente es necesario tener instalado NodeJS ultima version y angular 9 y ejecutar el siguiente comando en el back y front

`npm install`

# **Ejecución de la aplicación**

Para ejecutar el front debemos de tener el servidor iniciado e ir a la carpeta del front y ejecutar el siguiente comando el cuál abrirá automaticamente una pestaña al terminar de generar la aplicación

`ng serve -o`

# **Estructura del proyecto**
El proyecto está dividido en varios módulos para poder cargar la aplicación de forma perezosa (lazy loading), la estructura del proyecto es la siguiente:

## **App module**
Este es el modulo principal de la aplicación

### **Layout**
Este componente tiene la maquetación estática de la aplicación como el header y la etiqueta para renderizar dinámicamente cada uno de los componentes

## **Core module**
Este módulo contiene servicios que puede ser utilizados en cualquier otro modulo

### **Models**
Estructuras para el tipado de datos

### **Services**
Los servicios obtienen la información necesaria para los componentes

#### **LocalStorage**
Servicio para obtener y guardar las ordenes en la memoria local del navegador

#### **orders**
Servicio que obtiene las ordenes del almacenamiento local y las persiste en memoria por medio de un Observable para reportar cualquier cambio a los subscriptores. También usa el servicio del almacenamiento local para guardar las ordenes

#### **Products**
Servicio que obtiene los productos del api proporcionado

## **Material module**
Modulo encargado de importar y exportar todas las librerías usadas para los estilos de angular material

## **Orders module**
Modulo encargado de todas las rutas de la pestaña de solicitudes. En este se visualizan todas las ordenes

### **Orders component**
Este modulo se encarga de mostrar en una tabla las ordenes creadas y de filtrar por el id

## **Products module**
Modulo encargado de las rutas de la pestaña de productos, muestra los productos y permite reservar productos

### **Product**
Componente que muestra un solo producto, permite dar clic al botón para reservar ese producto y agrandar la imagen al dar clic

### **Products**
Componente que usa el servicio de productos para traer toda la información y crear componentes product

### **request**
Componente que contiene un formulario con toda la información solicitada para hacer la reservación, todos los campos son requeridos y el archivo debe ser inferior a 1MB, de ser exitoso muestra una notificación al usuario y usa el servicio de orders para guardar el producto en la memoria local del navegador

## **Shared module**
Modulo que contiene los componentes que se muestran en varias vistas, además contiene las variables de sass

### **components**
#### **Header**
Componente con la barra de navegación de la aplicación

### **constants**
Carpeta que tiene las constantes de sass para tener un estándar de las diferentes resoluciones de los dispositivos
