# Angular

## Índice

## Angular
### [Instalación](#instalación-de-angular)
- [Instalar Node.js](#instalar-nodejs)
- [Instalar Angular CLI](#instalar-angular-cli)
- [Extensiones de VSCode recomendadas para Angular](#extensiones-de-vscode-recomendadas-para-angular)
- [Extensiones de Google Chrome recomendadas para Angular](#extensiones-de-chrome-recomendadas-para-angular)
- [Creación de Nuevo Proyecto](#creación-de-un-proyecto-en-angular)
- [Instalación de Bootstrap en Angular](#instalación-de-bootstrap-en-angular)
- [Instalación y uso de la librería UIID (Ocasional)](#libreria-uiid)

### [Definición Angular FrameWork ](#definición-de-angular)
- [TypeScript para Angular](#typescript-en-angular)
  - [Clases de Typescript](#clases-typescript)
- [Elementos Clave de Angular](#elementos-clave-de-angular)
  - [Componentes](#componentes)
  - [Rutas](#rutas)
  - [Directivas](#directivas)
  - [Servicios](#servicios)
    - [Cómo inyectar y usar servicios en componentes](#uso-de-un-servicio-en-otro-componente)
    - [Descripción y uso de servicios privados](#uso-de-servicios-privados)
  - [Módulos](#modulos)
- [Ejecución de codigo al Inicializar](#ejecutar-código-al-inicializar-una-clase-o-componente-en-typescriptangular)
  - [Uso del Constructor](#implementar-el-constructor)
  - [Uso de OnInit](#implementar-oninit)
- [Añadir eventos a los Inputs](#añadir-eventos-al-presionar-teclas-en-los-inputs)
- [Obtener información de los Inputs](#obtener-información-de-inputs)
  - [NgModel](#uso-de-ngmodel)
  - [TagName](#uso-de-tagname-value)
  - [ViewChild](#uso-de-viewchild)
  - [Cuando usar cada Metodo de Extracción de Información en Inputs](#cuándo-usar-cada-método)
  - [Limpiar Inputs](#limpiar-inputs)
- [Interfaces en Angular](#que-es-una-interface)
- [Loaders: Elementos visuales mostrados durante la carga de componentes](#loaders)
- [Transiciones y Efectos especiales en elementos HTML (AnimateCSS)](#transiciones-y-efectos-en-elementos-animatecss)

### [Lista de Directivas en Angular ](#lista-de-directivas)
- [*ngIf](#ngif)
- [*ngFor](#ngfor)
  - [Obtener el índice de la iteración](#obtener-el-índice-de-la-iteración)
  - [Otros apartados de ngFor](#otros-apartados-de-ngfor)
- [*ngIf con else y ng-template](#ngif-con-else-y-ng-template)
- [ngClass](#ngclass)
- [ngStyle](#ngstyle)
- [ngModel](#ngmodel)
- [Input()](#input)
- [Output()](#output)

### [Creación de elementos Angular](#creación-de-elementos-en-angular)
- [Crear un Módulo (Opcional)](#crear-un-módulo)
- [Crear un Componente (html,css,ts)](#crear-un-componente)
  - [Angular Schematics](#angular-schematics-para-crear-componentes)
  - [Crear Componente con comando](#crear-un-componente-con-comando)
  - [Cambiar el Nombre de un Componente para Reutilización](#modificar-el-nombre-del-selector-de-un-componente-para-reutilización)
- [Crear un Servicio](#creación-de-un-servicio)
- [Crear Interfaces Rapidamente](#creación-rapida-de-interfaces-para-respuestas-y-peticiones-json)

### [Event Bindings]


### [Peticiones HTTP en Angular](#peticiones-http)
  - [Agregar Interfaces a Respuestas Http](#agregar-interfaces-a-respuestas-http)

### [Navegado entre Paginas](#navegación-entre-paginas)
- [Router Angular](#router)
- [RouterLinks Angular](#routerlinks)
- [Navegación entre rutas usando Metodos (Router.navigate)](#navegación-usando-metodos)



## Instalación de Angular

> [Documentación Oficial de Angular](https://angular.dev/installation)

Este proyecto tiene como objetivo proporcionar toda la información necesaria para instalar Angular, así como para crear y desarrollar proyectos utilizando esta tecnología. Además, tambien cuenta con un apartado de clases de TypeScript.

### **Instalar Node.js**  
   Descargar e instalar Node.js desde su [página oficial](https://nodejs.org/en/download/prebuilt-installer).

### **Instalar Angular CLI**  
   Ejecuta el siguiente comando para instalar Angular CLI globalmente en tu sistema.  
   *Windows:* Abrir una terminal en modo administrador.  
   *Linux:* Usar el comando `sudo`.
   ```bash
   npm install -g @angular/cli
   ```
### Extensiones de VSCode recomendadas para Angular

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

### Extensiones de Chrome recomendadas para Angular

* [Angular DevTools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh/related)

* [Json Viewer Awesome](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc)
---

## Creación de un Proyecto en Angular

En caso de que los comandos de Angular CLI (`ng`) generen errores, abrir PowerShell en **modo administrador** y ejecutar el siguiente comando para habilitar permisos necesarios:

```powershell
Set-ExecutionPolicy Unrestricted
```

1. Ejecuta el siguiente comando para crear un nuevo proyecto:
```
ng new name_proyecto_minusculas --no-standalone
```
- Opciones durante la configuración:
   - Escribe "y" cuando se solicite confirmar.
   - Selecciona CSS como opción de estilos.
   - Si se te pregunta por SSG/Prerendering, selecciona "N" para evitar configuraciones avanzadas y mantener el manejo estándar.

2. Una vez creado el proyecto, para compilarlo utilizar el siguiente comando:
```powershell
ng serve
```
3. Si desea abrir el navegador automáticamente al iniciar el servidor, usar:
```powershell
ng serve -o
```

## Instalación de Bootstrap en Angular

1. Ejecutar el siguiente comando para instalar Bootstrap, jQuery y Popper.js en tu proyecto Angular:

```bash
npm i bootstrap jquery @popperjs/core
```

2. Ubicar el archivo angular.json en la raíz del proyecto. Dentro de la sección build (y opcionalmente también en test), buscar el apartado styles y scripts (cerca de la `linea 36`). Por defecto, debería verse algo así:

```typescript
 "styles": [
      "src/styles.css"
   ],
   "scripts": []
```
3. Reemplazar o extiender las configuraciones existentes con las siguientes líneas, asegurandose de que las rutas sean correctas:

``` typescript
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/@popperjs/core/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
4. Correr nuevamente el servidor y verificar instalación.
---

## Typescript en Angular

- **Legibilidad:** TypeScript mejora la legibilidad del código al ser un lenguaje fuertemente tipado, lo que facilita la comprensión y mantenimiento del código.
- **Autocompletado avanzado:** Ofrece un sistema de IntelliSense más robusto que JavaScript, mostrando los métodos disponibles y los tipos de datos devueltos.
- **Clases y decoradores:** Permite usar el código de JavaScript en forma de clases, con soporte para decoradores que son una característica de TypeScript que permite añadir metadatos a las clases, métodos, propiedades o parámetros, con el fin de modificar su comportamiento o proporcionar información adicional al framework. En Angular, los decoradores son fundamentales para configurar y definir los componentes, servicios, módulos y otras estructuras de la aplicación.
- **Inyección de dependencias:** Facilita la gestión de dependencias, lo cual es esencial para aplicaciones modulares y escalables.La Inyección es un patrón de diseño utilizado en el desarrollo de software para gestionar las dependencias de un componente o clase de manera eficiente y modular. En lugar de que una clase cree o gestione directamente sus dependencias, estas son proporcionadas por un contenedor de inyección o un framework.

### Clases Typescript
Para consultar los aspectos teóricos y todos los elementos relacionados con esta tecnología, puedes revisar el [README del apartado de TypeScript: Clases.](https://github.com/byax2001/AngularTS/tree/main/typescript_class)

---

## Definición de Angular
Angular es un  **framework de desarrollo frontend** que permite construir aplicaciones web dinámicas, modernas y de alto rendimiento. Se basa en TypeScript y utiliza un enfoque modular para estructurar aplicaciones de manera escalable y reutilizable. Angular proporciona un conjunto de características integradas que facilitan el desarrollo.

### Elementos Clave de Angular
Angular posee:

#### **Componentes**  
   Los componentes son las unidades fundamentales de una aplicación en Angular. Representan una vista específica junto con su lógica asociada. Están formados por:  
   - **HTML**: Define la estructura visual.  
   - **CSS**: Estiliza el componente.  
   - **TypeScript**: Contiene la lógica del componente.  
   - **Decorador `@Component`**: Define los metadatos del componente como su selector, plantilla y estilos.  

   Ejemplo de componente:  
   ```typescript
   @Component({
     selector: 'app-ejemplo',
     templateUrl: './ejemplo.component.html',
     styleUrls: ['./ejemplo.component.css']
   })
   export class EjemploComponent {
     // Lógica del componente
   }
   ```
#### **Rutas**:
   Las rutas permiten la navegación entre diferentes vistas de la aplicación. Se configuran en el módulo de enrutamiento y enlazan URL específicas con componentes.
   Ejemplo de configuración de rutas:
   ```typescript
   const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   ];
   ```
#### **Directivas:**
   Las directivas son instrucciones que interactúan con el DOM para modificarlo o cambiar el comportamiento de los elementos.
   - Directivas de Componentes:Son directivas especiales que incluyen una plantilla HTML asociada, permitiendo la creación de componentes reutilizables (Muy parecida a un componente).  
   - Directivas estructurales: Modifican la estructura del DOM, como *ngIf y *ngFor.
   - Directivas de atributo: Cambian la apariencia o comportamiento de un elemento, como ngClass y ngStyle.
#### **Servicios:**
   Los servicios son clases diseñadas para manejar lógica empresarial, operaciones complejas o compartir datos entre componentes. Utilizan la inyección de dependencias para ser accesibles desde cualquier parte de la aplicación.
   Ejemplo de Servicio:
   ```typescript
      @Injectable({
         providedIn: 'root',
      })
      export class EjemploService {
         getDatos() {
            return 'Datos del servicio';
         }
      }
   ```
#### **Modulos:**
   Los módulos agrupan y organizan los componentes, directivas, servicios y otros elementos relacionados de una aplicación. El módulo raíz (AppModule) es el punto de entrada de la aplicación Angular.
   Ejemplo de Modulo:
   ```typescript
      @NgModule({
      declarations: [AppComponent, EjemploComponent],
      imports: [BrowserModule, AppRoutingModule],
      providers: [],
      bootstrap: [AppComponent],
      })
      export class AppModule {}  
   ```
---
## Ejecutar Código al Inicializar una Clase o Componente en TypeScript/Angular

En Angular, existen dos enfoques principales para ejecutar código cuando se inicializa una clase o un componente:

### **Implementar el Constructor**
El **constructor** es una función especial de TypeScript que se ejecuta automáticamente al crear una instancia de una clase. Es útil para realizar configuraciones iniciales rápidas, como la asignación de dependencias inyectadas o ejecutar código básico.

```typescript
constructor() {
  console.log('Hola Mundo');
}
```

**Nota**: Aunque el constructor puede ser utilizado para inicializaciones simples, en Angular se recomienda no cargarlo con lógica compleja o dependiente del framework.

---

### **Implementar `OnInit`**
Para manejar lógica más específica del ciclo de vida de un componente en Angular, se utiliza el método **`ngOnInit()`**, que forma parte de la interfaz `OnInit`. Este método es ideal para inicializar datos, realizar configuraciones avanzadas o ejecutar lógica que dependa del framework una vez que se ha creado el componente.

#### Pasos para usar `OnInit`:
1. **Extender de la interfaz `OnInit`**:
   Asegúrate de que la clase implemente la interfaz `OnInit`.

2. **Definir el método `ngOnInit()`**:
   Este método se ejecutará automáticamente una vez que Angular haya terminado de configurar el componente.

**Ejemplo**:
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  
  constructor() {
    console.log('Constructor: Componente inicializado.');
  }

  ngOnInit(): void {
    console.log('OnInit: Configuración del componente completa.');
  }
}
```

#### ¿Cuándo usar cada uno?
- **Constructor**: Para inicializar dependencias inyectadas o realizar tareas simples que no dependan de Angular.
- **`ngOnInit`**: Para ejecutar lógica que necesita que Angular haya completado la configuración del componente, como llamadas a servicios o inicialización de datos provenientes de APIs.

Al usar ambos métodos correctamente, puedes estructurar tu código de manera eficiente y seguir las mejores prácticas de Angular.

---

## Manejo de Eventos e Inputs en Angular: Ejemplos y Detalles

En Angular, trabajar con eventos y obtener información de inputs es esencial para crear aplicaciones interactivas. A continuación, se explican diferentes enfoques para manejar eventos y capturar datos de inputs:

---

### **Añadir Eventos al presionar Teclas en los Inputs**

Angular permite capturar eventos específicos asociados a los inputs de forma sencilla usando **event binding** permitiendo ejecutarse funciones al presionar dichas teclas. Algunos ejemplos comunes incluyen:

#### Ejemplos:
```html
<!-- Detectar cuando se presiona "Enter" -->
<input (keyup.enter)="Funcion()" placeholder="Presiona Enter" />

<!-- Capturar cualquier tecla presionada -->
<input (keyup)="Funcion($event)" placeholder="Escribe algo" />

<!-- Detectar combinación de teclas: Shift + Enter -->
<input (keyup.shift.enter)="Funcion()" placeholder="Shift + Enter" />
```

#### Explicación:
- **`keyup.enter`**: Escucha específicamente el evento de la tecla "Enter".
- **`keyup`**: Detecta cualquier tecla presionada y puede pasarse el evento como parámetro.
- **`keyup.shift.enter`**: Detecta una combinación de teclas, en este caso, "Shift" + "Enter".
- Existen otros mas, para mas información revisar la [Pagina Oficial](https://angular.dev/guide/templates/event-listeners)

---

### **Obtener Información de Inputs**

Existen varias formas de obtener y manejar la información ingresada en un input. Las más comunes son:

#### **Uso de `[(ngModel)]`**
Esta técnica permite vincular directamente el valor del input con una propiedad en el componente, mas adelante se explica de mejor forma este componente.

#### Ejemplo:
```html
<input [(ngModel)]="nombre" placeholder="Escribe tu nombre" />
<p>Hola, {{ nombre }}</p>
```

#### Explicación:
- **`[(ngModel)]`**: Vincula el valor del input con la propiedad `nombre` del componente en ambas direcciones (lectura y escritura).
- Asegúrate de importar el módulo `FormsModule` en el archivo `app.module.ts` para usar `ngModel`.

---

#### **Uso de TagName Value**
Permite acceder al input directamente desde la plantilla usando una referencia local al agregar un `#tag_name`, asignandole asi un identificador unico usando elementos DOM.

#### Ejemplo:
```html
<input #miInput type="text" placeholder="Escribe algo" />
<button (click)="obtenerValor(miInput.value)">Mostrar Valor</button>
```

#### Explicación:
- **`#miInput`**: Crea una referencia local al elemento input.
- **`miInput.value`**: Permite acceder al valor del input directamente desde la plantilla.

---

#### Uso de **`@ViewChild`**
Esta técnica se utiliza para obtener una referencia al input desde el archivo TypeScript, permitiendo un control más detallado usando elementos DOM.

#### Ejemplo:

```html
  <input #tagInput type="text" placeholder="Escribe algo" />
  <button (click)="mostrarValor()">Mostrar Valor</button>
```

```typescript
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  template: './ejemplo.component.html',
  styleUrls: './ejemplo.component.css'
})
export class EjemploComponent {
  @ViewChild('tagInput') 
  public tagInput!: ElementRef<HTMLInputElement>;

  mostrarValor(): void {
    console.log(this.tagInput.nativeElement.value);
  }
}
```

#### Explicación:
- **`@ViewChild('tagInput')`**: Crea una referencia al elemento input con el identificador `#tagInput`.
- **`tagInput.nativeElement.value`**: Permite acceder directamente al valor del input desde el componente.

---

### Cuándo Usar Cada Método:
- **`[(ngModel)]`**: Ideal para formularios simples o donde se requiere sincronización automática de valores.
- **TagName Value**: Útil para obtener valores de forma rápida sin necesidad de vinculación bidireccional.
- **`@ViewChild`**: Recomendado cuando se necesita manipular el DOM del input directamente o realizar operaciones más avanzadas.

---

### Limpiar Inputs:
Se puede igualar con `''` para realizar dicha accion por ejemplo  `tagInput.nativeElement.value=''` entre otras opcinoes.


---
### Que es una Interface
Una interface en TypeScript es una estructura que define la forma de un objeto. Actúa como un contrato que asegura que el objeto tenga ciertas propiedades con tipos específicos. Las interfaces son útiles para la verificación de tipos, lo que ayuda a evitar errores y mejora la legibilidad del código.

- Las interfaces pueden tener propiedades opcionales usando el operador ?.
- También pueden definir métodos que los objetos deben implementar.
- Pueden extender otras interfaces para heredar propiedades.

---
### Loaders

Los loaders son elementos visuales que se muestran mientras se cargan componentes, generalmente cuando se realizan peticiones al backend o a APIs externas. Para implementarlos correctamente, se utilizan elementos como `ngIf` y el event binder `(load)` en conjunto con funciones auxiliares. 

Los loaders pueden obtenerse de diversas fuentes o crearse manualmente. En este caso, se utilizara un loader de la página [SVG Loaders](https://samherbert.net/svg-loaders/). El proceso es el siguiente:

1. Seleccionar el SVG deseado en la página.
2. Descarga o copia el código SVG correspondiente desde el repositorio en GitHub.
3. Crea un archivo `.svg` y pega el código copiado. Se recomienda colocar este archivo en la carpeta `assets` o `public` de tu proyecto.
4. Llamar al archivo SVG desde cualquier apartado del proyecto según sea necesario.

### Ejemplo:

En el siguiente ejemplo, se usa `ngStyle` en lugar de `ngIf` para asegurar que el componente se construya correctamente:

```html
<div class="d-flex justify-content-center">
  <!-- Para utilizar el src de un objeto, se debe usar la notación de corchetes [src] -->
  <img 
    [src]="url_image" 
    alt="Imagen de la noticia" 
    class="card-img-top" 
    style="width: 300px; height: 200px; object-fit: cover;"
    (load)="onLoaded()"
    [ngStyle]="{'display': hasLoaded ? '' : 'none'}"
  />
  <img
    *ngIf="!hasLoaded"
    src="loader.svg"
    alt="Cargando..."
    class="card-img-top mt-3 bg-black"
    height="100%"
    width="100%"
  />
</div>
```

En este ejemplo:
- `hasLoaded` es una variable booleana que indica si la imagen ha terminado de cargar.
- Se utiliza el evento `(load)` para detectar cuándo la imagen principal ha sido cargada.
- Mientras la imagen se carga, se muestra un loader SVG.

---
### Transiciones y Efectos en Elementos Animate.css
A través de CSS, es posible crear efectos visuales que simulen transiciones o movimientos especiales en los elementos. Combinando **ngClass** o **ngStyle** con animaciones, se pueden generar componentes dinámicos que reaccionen a acciones externas o funcionen de manera continua. Una herramienta útil para esto es la biblioteca [Animate.css](https://animate.style/).

#### Instalación

Para utilizar Animate.css, primero instálalar con npm:

```powershell
npm install animate.css --save
```

Luego, importar las animaciones en el archivo donde se usaran:

```jsx
import 'animate.css';
```

O agregar el enlace de la hoja de estilos en el archivo `index.html`:

```html
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>
```

#### Uso

1. Consultar la lista completa de animaciones disponibles en la [página oficial de Animate.css](https://animate.style/).
2. Copiar el nombre de la animación deseada y agrégala a la clase del elemento HTML que se desea animar.

Ejemplo:

```html
<button [ngClass]="['animate__pulse']">Haz clic aquí</button>
```
---


## Lista de Directivas

> Para ver mas directivas revisar la [Pagina Oficial](https://angular.dev/guide/directives)

Como se comento anteriormente, en Angular, las directivas son clases que se usan para modificar la apariencia, estructura y funcionalidad de los elementos de una aplicación. Son una parte fundamental del núcleo de Angular y permiten extender la funcionalidad del HTML, entre las que se encuentran estan:

---

### **`*ngIf`**
El atributo `*ngIf` se utiliza para mostrar u ocultar un componente en función de una condición booleana. Es importante mencionar que Angular realmente destruye el componente cuando la condición es `false`. 

**Ejemplo:**
```html
<div *ngIf="mostrarMensaje">Este mensaje se muestra si 'mostrarMensaje' es true.</div>
```
---
### **`*ngFor`**
El atributo *ngFor se utiliza para iterar sobre una lista o colección y generar dinámicamente elementos del DOM para cada ítem.
**Ejemplo:** 
```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```
#### Obtener el índice de la iteración
Para acceder al índice de cada elemento durante la iteración, se puede usar la palabra clave `index` de la siguiente manera:  

```html
<ul>
  <li *ngFor="let item of items; let i = index">{{ i }} - {{ item }}</li>
</ul>
```
El índice (`i`) estará disponible para su uso dentro del código HTML.

#### Otros apartados de ngFor
Angular ofrece varias propiedades adicionales que pueden ser utilizadas junto con `*ngFor` para identificar elementos específicos dentro de la iteración:
 ```html
  <ul>
    <li *ngFor="let item of items; let i = index; let esPrimero=first; let isLast = last; let Par=even; let Impar=odd;">
      {{ first ? '(Primero)' : '' }} {{ item }}
    </li>
  </ul>
  ```
- **`isFirst`**: Indica con un true si el elemento es el primero en la colección.  
- **`isLast`**: Indica con un true si el elemento es el último en la colección.  
- **`isEven`**: Indica con un true si el índice del elemento es par.  
- **`isOdd`**: Indica con un true  si el índice del elemento es impar.  

   Estas propiedades permiten agregar lógica condicional directamente en el HTML para personalizar la forma en que se muestran los elementos de una lista.
---


### **`*ngIf`** con **`else`** y **`ng-template`**
`*ngIf` puede combinarse con `else` para manejar casos en los que la condición sea false. Usando `ng-template,` es posible definir un bloque de contenido que no se renderiza hasta que se cumpla una acción específica. El `ng-template` puede identificarse con un alias mediante #, y luego referenciarse, por ejemplo, usando else.
Ejemplo:
```html
<div *ngIf="mostrarMensaje; else plantillaAlternativa">
  Este mensaje se muestra si 'mostrarMensaje' es true.
</div>

<ng-template #plantillaAlternativa>
  <p>Este es un mensaje alternativo que aparece si 'mostrarMensaje' es false.</p>
</ng-template>
```
---
### **`ngClass`**

El atributo `ngClass` se utiliza para aplicar clases CSS condicionalmente a elementos del DOM. Es especialmente útil para combinar lógica de estilos con bibliotecas como Bootstrap.  

**Ejemplo básico:**  
```html
<div [ngClass]="{'text-success': Var_Boolean, 'text-danger': !Var_Boolean}">
  Estado: {{ Var_Boolean ? 'Activo' : 'Inactivo' }}
</div>
```

En este caso, la clase `text-success` se aplica si la variable `Var_Boolean` es verdadera, y `text-danger` si es falsa.

**Ejemplo con array de clases:**  
```html
<div [ngClass]="['class1', classCondition ? 'class2' : 'class3']">
  Contenido dinámico
</div>
```

`ngClass` permite manejar estilos dinámicos y responder a cambios en los datos o estados.

---
### **`ngStyle`**

El atributo `ngStyle` se utiliza para aplicar estilos en línea de manera dinámica a los elementos del DOM. Permite establecer propiedades CSS basadas en valores o expresiones, lo que lo convierte en una herramienta versátil para personalizar la apariencia de los elementos según el estado o los datos.

**Ejemplo básico:**  
```html
<div [ngStyle]="{'color': isActive ? 'green' : 'red', 'font-size': '20px'}">
  Este texto cambia de color según el estado.
</div>
```

En este ejemplo:
- Si la variable `isActive` es `true`, el color será verde.
- Si es `false`, el color será rojo.
- El tamaño de fuente se establece en `20px`.

---

**Ejemplo con propiedades CSS dinámicas:**  
```html
<div [ngStyle]="estilosDinamicos">
  Texto con estilos aplicados dinámicamente.
</div>
```

En el archivo TypeScript asociado:
```typescript
estilosDinamicos = {
  'background-color': 'lightblue',
  'padding': '10px',
  'border-radius': '5px'
};
```

---

**Ejemplo combinado con lógica:**  
```html
<div [ngStyle]="{'border': hasError ? '2px solid red' : '2px solid green'}">
  {{ hasError ? 'Hay un error' : 'Todo está correcto' }}
</div>
```

En este caso, se utiliza `ngStyle` para aplicar un borde rojo si hay un error (`hasError = true`) o un borde verde si todo está correcto (`hasError = false`).

`ngStyle` es especialmente útil para personalizar estilos de forma dinámica, dependiendo de datos o condiciones del componente.


---

### **`ngModel`**

El atributo `ngModel` se utiliza para habilitar el enlace de datos bidireccional (two-way data binding) entre un elemento HTML como un Input y una variable presente en el archivo `ts`. Esto es esencial en formularios y entradas de datos.  

**Ejemplo básico:**  
```html
<input [(ngModel)]="userName" placeholder="Escribe tu nombre">
<p>Tu nombre es: {{ userName }}</p>
```

El valor del input se sincroniza automáticamente con la propiedad `userName`.

**Nota importante:**  
1. Para usar `ngModel`, es necesario importar el módulo `FormsModule` en el archivo del módulo que encapsule el componente.  
2. Asegúrate de incluir el atributo HTML `name` en los inputs para evitar errores como `ngModel` siendo independiente (standalone).  
```html
<input [(ngModel)]="userName" name="userName">
```

---

### **`Input()`**

El decorador `@Input()` se utiliza para pasar datos desde un componente padre hacia un componente hijo. Es esencial para compartir información entre componentes.

**Ejemplo básico:**  

Componente padre:  
```html
<app-hijo [datoRecibido]="mensaje"></app-hijo>
```

Componente hijo:  
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  template: '<p>{{ datoRecibido }}</p>'
})
export class HijoComponent {
  @Input() datoRecibido!: string;
}
```

---

### **`Output()`**

El decorador `@Output()` permite enviar datos o eventos desde un componente hijo hacia su componente padre. Usualmente se utiliza con la clase `EventEmitter`.

**Ejemplo básico:**  

Componente hijo:  
```html
<button (click)="enviarDatos()">Enviar</button>
```
```typescript
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  template: './app-hijo.component.html'
})
export class HijoComponent {
  @Output() eventoHijo:EventEmitter<string> = new EventEmitter();

  enviarDatos():void {
    this.eventoHijo.emit('Datos enviados desde el hijo');
  }
}
```

Componente padre:  
```html
<app-hijo (eventoHijo)="manejarEvento($event)"></app-hijo>
```

```typescript
export class PadreComponent {
  manejarEvento(dato: string) {
    console.log(dato);
  }
}
```

## Crear Elementos en Angular:
---
## Crear un Módulo

Cuando el archivo `app.module.ts` contiene demasiados componentes, se recomienda crear módulos adicionales para organizar el proyecto de manera eficiente. Un módulo es un conjunto que puede incluir páginas, interfaces, servicios y componentes relacionados.

**Comando para crear un módulo:**
```bash
ng g m nombre_modulo
```

Al crear componentes asociados a un módulo específico, es importante importar manualmente los archivos `CSS`, `HTML` y `TS` al módulo correspondiente. Esto puede hacerse de manera manual o utilizando la extensión de Visual Studio Code llamada **Angular Schematics**. 

---

## Crear un Componente

### Angular Schematics para crear Componentes
1. Crear una carpeta donde se almacenará el componente.
2. Hacer clic derecho sobre la carpeta.
3. Seleccionar **Generate a File** en Angular Schematics.
4. Escoger **Component** y escribir un nombre en el apartado que aparece automaticamente en vscode y dar enter.
5. Escoger **Component Default**.

Esto generará automáticamente los archivos `CSS`, `HTML` y `TS` en la carpeta seleccionada e importará el componente únicamente en el módulo que corresponda, evitando su inclusión automatica en `app.module.ts` en caso este envuelto en otro archivo `module.ts` o incluyendolo allí si no.
Si se utiliza el comando `ng g c nombre_componente` para generar los componentes, estos se agregarán automáticamente al app.module.ts, lo cual es lo que se busca evitar en el caso de que se desee usar mas de un modulo.
Es fundamental exportar el módulo creado para que pueda ser utilizado desde el archivo `app.module.ts`. Esto se logra añadiendo la propiedad `exports` dentro del módulo creado, y luego importándolo en la sección `imports` de `app.module.ts`. De esta manera, los componentes, servicios o funcionalidades del módulo estarán disponibles en toda la aplicación. 

---

### Crear un componente con comando
Para crear un componente cuando no halla necesidad de crear muchos mdoulos utilizar el siguiente comando:
```bash
ng g c nombre_componente
```

Si se desea crear una carpeta específica para el componente, usar el comando:

```bash
ng g c nombre_carpeta/nombre_componente
```

Este comando genera todos los archivos necesarios para el componente (.css, .html, .ts, .spec.ts) y actualiza automáticamente el archivo `app.module.ts` para declarar el nuevo componente.

---

### Modificar el Nombre del Selector de un Componente para Reutilización

Para permitir que un componente sea reutilizado sin que su nombre deba comenzar obligatoriamente con el prefijo `app`, es necesario modificar el **selector** del componente. Esto se puede lograr siguiendo estos pasos:

1. Abre el archivo `componente.ts` correspondiente al componente.
2. Localiza la propiedad `selector` dentro del decorador `@Component`.
3. Cambia el valor del `selector` al nombre que desees usar para invocar el componente.

Con este ajuste, el componente podrá ser utilizado con el nuevo nombre especificado, sin estar limitado a un prefijo como `app`.

---

## Creación de un Servicio:
Los servicios en Angular son clases que permiten compartir datos, lógica o funcionalidades entre diferentes componentes y módulos de la aplicación. En esta guía se explicará cómo crearlos y usarlos.


1. **Con Comando**
  Angular proporciona herramientas integradas para generar servicios mediante comandos de Angular CLI. Puedes crear un servicio con el siguiente comando:
  ```bash 
  ng generate service services/data
  ```
2. **Angular Schematics**
  A través de hacer clic derecho a una carpeta y seleccionar esta opción permtie crear de forma rapida un componente service.
3. **Crearlo manualmente**
  Si se decide crear un servicio manualmente, se puede iniciar con la plantilla base. Por ejemplo, usando un atajo de código:
  ```
  a-service + Tecla Tab
  ```
  El contenido del servicio base sería el siguiente:

  ```typescript 
  import { Injectable } from '@angular/core';

  @Injectable({providedIn: 'root'}) // providedIn: 'root' significa que el servicio se inyectará en el módulo raíz
                                  // por lo tanto nos evita tener que importar el servicio en el módulo en el apartado de providers
  export class ServiceNameService {
    // A través de la inyeccion de dependencias se puede acceder a otros servicios
    // Los servicios son clases que se pueden inyectar en cualquier componente o servicio
    // que se encuentre en el mismo módulo o en cualquier otro módulo siempre y cuando
    // se haya importado en el módulo que se desea utilizar.
    constructor() { }

  }
  ```
  ### Uso de un Servicio en Otro Componente:
  Para usar el servicio creado en un componente, realiza los siguientes pasos:
  1. **Inyección del Servicio:**
  En el archivo del componente (.ts), importa e inyecta el servicio en el constructor:
  ```typescript 
  import { Component } from '@angular/core'; 
  import { ServiceNameService } from './services/data.service';
  @Component({ 
    selector: 'app-root', 
    templateUrl: './app.component.html', 
    styleUrls: ['./app.component.css'] 
  }) 
  export class AppComponent { 
    constructor(public serviceName: ServiceNameService) { // Ahora se puede acceder a los métodos y propiedades del servicio. 
  } }
  ```
  2. **Acceso a Métodos y Propiedades:**
  Se puede utilizar las funcionalidades del servicio dentro del componente. Por ejemplo:
  ```typescript
  this.serviceName.someMethod();
  ```
  Y dentro del html de esta forma:
  ```html
  <button (clic)="service.someMethod($event)"></button>
  ```
### Uso de Servicios Privados
 1. **Inyección del Servicio:**
  En el archivo del componente (.ts), importa e inyecta el servicio en el constructor:
  ```typescript 
  import { Component } from '@angular/core'; 
  import { ServiceNameService } from './services/data.service';
  @Component({ 
    selector: 'app-root', 
    templateUrl: './app.component.html', 
    styleUrls: ['./app.component.css'] 
  }) 
  export class AppComponent { 
    constructor(private serviceName: ServiceNameService) { // Ahora se puede acceder a los métodos y propiedades del servicio. 

    get AllNames():string[]{
      return [... this.serviceName.allNames();]
    }

    deleteNames(id:int):void{
        this.serviceName.delete(id);
    }

  } }
  ```
  2. **Acceso a Métodos y Propiedades:**
  Se puede utilizar las funcionalidades del servicio dentro del componente. Por ejemplo:
  ```typescript
   get AllNames():string[]{
      return [... this.serviceName.allNames();]
    }

    deleteNames(id:int):void{
        this.serviceName.delete(id);
    }
  ```
  Y dentro del html de esta forma:
  ```html
  <button (clic)="deleteNames($event)"></button>
  ```


### Libreria UIID
Este software retorna una string irrepetible, sirve para colocar ids en listas que no poseen un id unico y se desea realizar un filtro
#### Instalar UIID
Usar los siguientes comandos:
```powershell
npm i uuid
npm i --save-dev @types/uuid
```
#### Usar UIID
```typescript
import {V4 as uuid} from uuid;
console.log(uuid()); //imprime un id irrepetible
```

## Peticiones Http

En Angular, para realizar peticiones HTTP se puede usar Axios o Fetch; sin embargo, Angular proporciona su propio módulo: **HttpClient**. Para implementarlo, sigue estos pasos:

1. Importa `HttpClientModule` en el archivo `app.module.ts`:
```typescript
import { HttpClientModule } from '@angular/common/http';
```

2. Agrega `HttpClientModule` al array de imports en `app.module.ts`:
```typescript
imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule
],
```

3. Importa `HttpClient` en el archivo del servicio donde se necesite:
```typescript
import { HttpClient } from '@angular/common/http';
```

4. Añadirlo en el constructor del servicio:
```typescript
constructor(private http: HttpClient) { }
```

**Ejemplo de Peticiones HTTP**

- **GET** con tres parámetros en la URL:
```typescript
getComments(postId: number, id: number, name: string) {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const params = new HttpParams().set('postId', postId)
                                 .set('id', id)
                                 .set('name', name);
  return this.http.get(url, { params }).subscribe((data) => {
    console.log(data);
  });
}
```

- **POST** con cuerpo de datos:
```typescript
postComments(postId: number, id: number, name: string) {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const body = {
    postId: postId,
    id: id,
    name: name
  };
  return this.http.post(url, body).subscribe((data) => {
    console.log(data);
  });
}
```

De esta manera, se pueden realizar peticiones a una API utilizando métodos como **GET**, **POST**, **PUT** o **DELETE**.

---

### Agregar Interfaces a Respuestas HTTP

Para agregar interfaces a las respuestas HTTP y evitar errores al manejar peticiones, sigue estos pasos:

**Archivo `service.ts`:**  
Definir el tipo de respuesta esperado en el método del servicio. Ejemplo:

```typescript
getCategorias() {
    return this.http.get<CategoriaInterface[]>(`${this.url}`, {headers: {Authorization: `Bearer ${this.token}`}});
}
```

**Archivo `component.ts`:**  
Asignar el tipo de respuesta a la variable en el método correspondiente. Ejemplo:

```typescript
fillCategoria(): void {
    this.cat_serv.getCategorias().subscribe(
      (res: CategoriaInterface[]) => { 
        // Aquí se asigna el tipo de respuesta a la variable "res".
        // Esto es posible porque en el archivo service.ts se especificó que el tipo de respuesta es un arreglo de objetos de tipo CategoriaInterface.
        this.categorias = res;
      },
      (err) => {
        console.log(err);
      }
    );
}
```

Si no se especifica el tipo de respuesta en el archivo `service.ts`, se producirá un error al intentar tipar la variable `res` en el archivo `component.ts`.



---

## Creación Rapida de Interfaces para respuestas y peticiones JSON

Para tipar posibles respuestas y peticiones JSON, utilizar herramientas como [QuickType](https://app.quicktype.io/). Seleccionar la opción **TypeScript** en la esquina superior derecha para generar interfaces que representen las respuestas esperadas, posteriormente copiar y pegar las interfaces creadas.

---

## Navegación entre Paginas:
---
## Router

Si no se creó el archivo `app-routing.module.ts`, debes generarlo. A continuación, un ejemplo de archivo de rutas:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',  // Redirige cualquier ruta no definida a 'home'
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Exporta el módulo para que pueda ser utilizado en app.module.ts
})
export class AppRoutingModule { }
```

Recordar eliminar todo del archivo `app.component.html` y agregar solo:
```html
<router-outlet></router-outlet>
```
---

### RouterLinks

`RouterLink` se utiliza para navegar entre páginas, similar al componente `Link` en React. Para habilitarlo:

1. Importa `RouterModule` en el módulo correspondiente, generalmente `app.module.ts`:
```typescript
import { RouterModule } from '@angular/router';
```

2. Agrega `RouterModule` al array de imports:
```typescript
imports: [
  BrowserModule,
  AppRoutingModule,
  RouterModule
]
```

3. Usa `routerLink` en elementos HTML como botones o enlaces:
```html
<li routerLink="home">Home Page</li>
```

### Navegación usando Metodos

Similar al componente `useNavigate` de React, para navegar entre rutas desde código TypeScript:

1. Importa `Router` en el archivo o servicio correspondiente:
```typescript
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private router: Router) { }
}
```

2. Usa el método `navigate` para cambiar entre rutas:
```typescript
this.router.navigate(['/home']);
```

