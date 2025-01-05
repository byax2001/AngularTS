# HeroesApp

Este proyecto incluye las siguientes características:

- **Angular Material** y **PrimeFlex** para diseño responsivo.  
- **Variables de entorno** para configuración dinámica.  
- Una plantilla base llamada **Layout** que facilita la creación de páginas que comparten elementos comunes como **navbar** y **footbar**. Esto es útil para casos como una serie de páginas tras iniciar sesión.
- **Uso de Pipes Personalizados**: Se implementaron **pipes personalizados** para manipular los datos sin modificar su origen.  

## Pipe Personalizado

### Pipe `heroImage`:

Se creó un pipe personalizado llamado `heroImage`, cuya función es generar una URL basada en la información del héroe. La imagen correspondiente a cada héroe se encuentra en la carpeta `assets/heroes` y se identifica mediante el **ID** del héroe seguido de la extensión `.jpg`.  

### Uso del pipe:

1. El pipe toma la información del héroe como entrada.  
2. Genera automáticamente la URL de la imagen en el formato:  
   `assets/heroes/[ID].jpg`

Este enfoque permite gestionar dinámicamente las imágenes de los héroes sin modificar la estructura original de los datos.



## Backend

Se utilizó un backend simple proporcionado por **JSON Server** para realizar pruebas.  

En el archivo `package.json` de Angular, se agregó el siguiente script:  
```json
"backend": "json-server --watch data/db.json"
```

### Instrucciones para ejecutar el backend:

1. Asegúrarse de tener **JSON Server** instalado, de no tenerlo ejecutar el siguiente comando:
  ```
  npm i --save-dev json-server
  ```
2. Ejecuta el siguiente comando:  
   ```bash
   npm run backend
   ```

Esto iniciará el servidor backend para pruebas.


