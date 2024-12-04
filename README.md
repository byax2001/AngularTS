# Angular
## Instalación de Angular
> [Documentación Oficial de Angular](https://angular.dev/installation)

Este proyecto tiene como objetivo proporcionar toda la información necesaria para instalar Angular, así como para crear y desarrollar proyectos utilizando esta tecnología.

1. **Instalar Node.js**  
   Descargar e instalar Node.js desde su [página oficial](https://nodejs.org/en/download/prebuilt-installer).

2. **Instalar Angular CLI**  
   Ejecuta el siguiente comando para instalar Angular CLI globalmente en tu sistema.  
   *Windows:* Abrir una terminal en modo administrador.  
   *Linux:* Usar el comando `sudo`.
   ```bash
   npm install -g @angular/cli
   ```
###  Extensiones de VSCode recomendadaspara Angular

* [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

* [Angular Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)

* [Angular Schematics](https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics)

* [Angular 2 Inline](https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline)

* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

* [Auto import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)

* [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

* [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

* [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)

* [TypeScript Importer - optional](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)

* [Editor Config for VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

* [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

###  Extensiones de Chrome recomendadas paranagular

* [Angular DevTools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh/related)

* [Json Viewer Awesome](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc)


## Uso de Typescript

- **Legibilidad:** TypeScript mejora la legibilidad del código al ser un lenguaje fuertemente tipado, lo que facilita la comprensión y mantenimiento del código.
- **Autocompletado avanzado:** Ofrece un sistema de IntelliSense más robusto que JavaScript, mostrando los métodos disponibles y los tipos de datos devueltos.
- **Clases y decoradores:** Permite usar el código de JavaScript en forma de clases, con soporte para decoradores que son una característica de TypeScript que permite añadir metadatos a las clases, métodos, propiedades o parámetros, con el fin de modificar su comportamiento o proporcionar información adicional al framework. En Angular, los decoradores son fundamentales para configurar y definir los componentes, servicios, módulos y otras estructuras de la aplicación.
- **Inyección de dependencias:** Facilita la gestión de dependencias, lo cual es esencial para aplicaciones modulares y escalables.La Inyección es un patrón de diseño utilizado en el desarrollo de software para gestionar las dependencias de un componente o clase de manera eficiente y modular. En lugar de que una clase cree o gestione directamente sus dependencias, estas son proporcionadas por un contenedor de inyección o un framework.





## Creación de un proyecto
1. Ejecutar el siguiente comando
```
ng new name_proyecto_minusculas --standalone
```
