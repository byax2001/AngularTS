# Angular

# Índice

## Angular
### [Instalación](#instalación-de-angular)
- [Instalar Node.js](#instalar-nodejs)
- [Instalar Angular CLI](#instalar-angular-cli)
- [Extensiones de VSCode recomendadas para Angular](#extensiones-de-vscode-recomendadas-para-angular)
- [Extensiones de Google Chrome recomendadas para Angular](#extensiones-de-chrome-recomendadas-para-angular)

### [Creación de Nuevo Proyecto](#creación-de-un-proyecto-en-angular)
- [Instalación de Bootstrap en Angular](#instalación-de-bootstrap-en-angular)

### [TypeScript para Angular](#typescript-en-angular)

### [¿Que es Angular?](#definición-de-angular)
- [Elementos Clave de Angular](#elementos-clave-de-angular)
  - [Componentes](#componentes)
  - [Rutas](#rutas)
  - [Directivas](#directivas)
  - [Servicios](#servicios)
  - [Módulos](#módulos)
- [*ngIf](#ngif)
- [*ngFor](#ngfor)
  - [Obtener el índice de la iteración](#obtener-el-índice-de-la-iteración)
  - [Otros apartados de ngFor](#otros-apartados-de-ngfor)
- [*ngIf con else y ng-template](#ngif-con-else-y-ng-template)
- [ngClass](#ngclass)
- [ngModel](#ngmodel)
- [Input()](#input)
- [Output()](#output)
### [Crear un Módulo (Opcional)](#crear-un-módulo)
### [Angular Schematics](#angular-schematics-para-crear-componentes)

### [Crear Componente con comando](#crear-un-componente-con-comando)

### [Servicios Angular](#servicios-en-angular)
  - [Creación](#creación-de-un-servicio)

### [Cómo inyectar y usar servicios en componentes](#uso-de-un-servicio-en-otro-componente)

### [Descripción y uso de servicios privados](#uso-de-servicios-privados)

### [Instalación y uso de la librería UIID](#libreria-uiid)

### [Descripción de cómo realizar peticiones HTTP en Angular](#peticiones-http)

### [Cómo tipar respuestas JSON](#tipar-respuestas-json)

### [Cómo configurar y usar Router en Angular](#router)

### [Descripción y uso de RouterLinks](#routerlinks)

### [Navegación entre rutas en TypeScript (Router.navigate)](#navegación-en-typescript)

### [Uso del constructor para ejecutar código antes de todo](#ejecutar-código-antes-de-todo)


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


## Definición de Angular
Angular es un  **framework de desarrollo frontend** que permite construir aplicaciones web dinámicas, modernas y de alto rendimiento. Se basa en TypeScript y utiliza un enfoque modular para estructurar aplicaciones de manera escalable y reutilizable. Angular proporciona un conjunto de características integradas que facilitan el desarrollo.

### Elementos Clave de Angular
Angular posee:

1. **Componentes**  
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
- **Rutas**:
   Las rutas permiten la navegación entre diferentes vistas de la aplicación. Se configuran en el módulo de enrutamiento y enlazan URL específicas con componentes.
   Ejemplo de configuración de rutas:
   ```typescript
   const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   ];
   ```
- **Directivas:**
   Las directivas son instrucciones que interactúan con el DOM para modificarlo o cambiar el comportamiento de los elementos.
   - Directivas de Componentes:Son directivas especiales que incluyen una plantilla HTML asociada, permitiendo la creación de componentes reutilizables (Muy parecida a un componente).  
   - Directivas estructurales: Modifican la estructura del DOM, como *ngIf y *ngFor.
   - Directivas de atributo: Cambian la apariencia o comportamiento de un elemento, como ngClass y ngStyle.
- **Servicios:**
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
- **Modulos:**
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



### Crear un Módulo

Cuando el archivo `app.module.ts` contiene demasiados componentes, se recomienda crear módulos adicionales para organizar el proyecto de manera eficiente. Un módulo es un conjunto que puede incluir páginas, interfaces, servicios y componentes relacionados.

**Comando para crear un módulo:**
```bash
ng g m nombre_modulo
```

Al crear componentes asociados a un módulo específico, es importante importar manualmente los archivos `CSS`, `HTML` y `TS` al módulo correspondiente. Esto puede hacerse de manera manual o utilizando la extensión de Visual Studio Code llamada **Angular Schematics**. 

### Angular Schematics para crear Componentes
1. Crear una carpeta donde se almacenará el componente.
2. Hacer clic derecho sobre la carpeta.
3. Seleccionar **Generate a File** en Angular Schematics.
4. Escoger **Component** y escribir un nombre en el apartado que aparece automaticamente en vscode y dar enter.
5. Escoger **Component Default**.

Esto generará automáticamente los archivos `CSS`, `HTML` y `TS` en la carpeta seleccionada e importará el componente únicamente en el módulo que corresponda, evitando su inclusión automatica en `app.module.ts` en caso este envuelto en otro archivo `module.ts` o incluyendolo allí si no.
Si se utiliza el comando `ng g c nombre_componente` para generar los componentes, estos se agregarán automáticamente al app.module.ts, lo cual es lo que se busca evitar en el caso de que se desee usar mas de un modulo.
Es fundamental exportar el módulo creado para que pueda ser utilizado desde el archivo `app.module.ts`. Esto se logra añadiendo la propiedad `exports` dentro del módulo creado, y luego importándolo en la sección `imports` de `app.module.ts`. De esta manera, los componentes, servicios o funcionalidades del módulo estarán disponibles en toda la aplicación. 

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

## Servicios en Angular
Los servicios en Angular son clases que permiten compartir datos, lógica o funcionalidades entre diferentes componentes y módulos de la aplicación. En esta guía se explicará cómo crearlos y usarlos.


### Creación de un Servicio
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

3. Importa `HttpClient` en el archivo del servicio donde lo necesites:
```typescript
import { HttpClient } from '@angular/common/http';
```

4. Añádelo en el constructor del servicio:
```typescript
constructor(private http: HttpClient) { }
```

### Ejemplo de Peticiones HTTP

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

## Tipar Respuestas JSON

Para tipar posibles respuestas JSON, utiliza herramientas como [QuickType](https://app.quicktype.io/). Selecciona la opción **TypeScript** en la esquina superior derecha para generar interfaces que representen las respuestas esperadas.

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

### Navegación en TypeScript

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

---
## Ejecutar Código Antes de Todo
Usa el constructor en cualquier archivo TypeScript para ejecutar código al inicializar la clase:

```typescript
constructor() {
  console.log('Hola Mundo');
}
```