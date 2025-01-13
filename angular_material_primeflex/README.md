# HeroesApp

Este proyecto incluye las siguientes características:

- **Angular Material** y **PrimeFlex**: Implementación de diseño responsivo y estilizado.
- **Variables de entorno**: Configuración dinámica adaptable a diferentes entornos.
- **Plantilla base `Layout`**: Permite la creación de páginas reutilizando elementos comunes como **navbar** y **footbar**. Ideal para flujos que incluyen varias páginas tras iniciar sesión.
- **Pipes Personalizados**: Uso de **pipes** para transformar y mostrar datos sin alterar su estructura original.
- **Inputs con Autocompletado**.
- **Tarjetas (Cards)** para organizar información visualmente.
- **Dialogs/Modals** con **Angular Material**.
  ![Modal](https://github.com/user-attachments/assets/17b37e26-2902-418f-95f2-e164036075d5)
- **SnackBar Angular Material**: Notificaciones rápidas que aparecen en la parte inferior de la pantalla para informar sobre un estado o acción.
  ![Snackbar](https://github.com/user-attachments/assets/5a585cf8-9cfe-45a5-bd52-59b2827ec2f6)

---

## Indice
- [Pipe Personalizado](#pipe-personalizado)
- [Backend del Proyecto](#backend)
  - [Instrucciones para Ejecutar el Backend](#instrucciones-para-ejecutar-el-backend)
- [Componentes Usados de Angular Material](#angular-material)

---

## Pipe Personalizado

### Pipe `heroImage`:

Se creó un pipe personalizado llamado `heroImage`, cuya función es generar una URL basada en la información del héroe. La imagen correspondiente a cada héroe se encuentra en la carpeta `assets/heroes` y se identifica mediante el **ID** del héroe seguido de la extensión `.jpg`.  

### Uso del pipe:

1. El pipe toma la información del héroe como entrada.  
2. Genera automáticamente la URL de la imagen en el formato:  
   `assets/heroes/[ID].jpg`

Este enfoque permite gestionar dinámicamente las imágenes de los héroes sin modificar la estructura original de los datos.

---

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
2. Ejecutar el siguiente comando:  
   ```bash
   npm run backend
   ```

Esto iniciará el servidor backend para pruebas.

## Angular Material

Se integraron diversos componentes de Angular Material para mejorar la experiencia de usuario y el diseño visual de la aplicación:

- **Input Field**: Campos de entrada estilizados con validaciones integradas.
- **Autocomplete**: Sugerencias dinámicas mientras el usuario escribe.
- **Cards**: Tarjetas para mostrar información agrupada.
- **Dialog (Modal)**: Ventanas modales para acciones específicas o detalles adicionales.
- **SnackBar**: Notificaciones temporales en la parte inferior de la pantalla.
- **Buttons**: Botones estilizados con colores y variantes configurables.

Estas herramientas ayudan a crear una aplicación visualmente atractiva y fácil de usar.





