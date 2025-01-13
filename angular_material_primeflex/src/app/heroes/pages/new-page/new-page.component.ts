import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeleteHeroeComponent } from '../../components/ModalDeleteHeroe/ModalDeleteHeroe.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit{

  public heroForm = new FormGroup(
  { //Para mayor orden se tomaron los campos de la interfaz Hero y se crearon los campos del formulario
      id:               new FormControl(''), // lo que esta adentro del parentesis es el valor por defecto o inicial
      superhero:        new FormControl('', {nonNullable:true}), // se puede agregar un segundo argumento para agregar validaciones en este caso se agrega la validación de que no puede ser nulo
      publisher:        new FormControl<Publisher>(Publisher.DCComics),//se puede especificar el tipo de dato que se espera siempre cuidando de poner un valor por defecto
      alter_ego:        new FormControl(''),
      first_appearance: new FormControl(''), // los formcontrol son de tipo string por defecto
      characters:       new FormControl(''),
      alt_img:         new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private snackbar: MatSnackBar, // Componente de Angular Material que permite mostrar mensajes en la parte inferior de la pantalla
    private dialog: MatDialog // Componente de Angular Material que permite mostrar modales con opciones
  ) { }

  ngOnInit(): void {

    if ( !this.router.url.includes('edit') ) return; //Cuando se esta editando en la url aparece la palabra edit, por lo que si no aparece se retorna

    // RELLENAR EL FORMULARIO CON LOS DATOS DEL HEROE EN EL CASO DE QUE SE ESTE EDITANDO

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroById( id ) ), // se obtiene el id de la url y se obtiene el heroe con ese id
        // el {{ id }} es una destructuración de objetos, es decir que se obtiene el valor de id del objeto que se recibe como argumento
        // en la url se recibe un objeto con el id, por lo que se obtiene el valor de id de ese objeto
      ).subscribe( hero => { //El colococar el switchMap antes del subscribe permite que el flujo de la aplicación hace que el switchMap retorne un observable
                  // y el subscribe se encarga de suscribirse a ese observable

        if ( !hero ) { // si no se encuentra el heroe se redirige a la pagina principal
          return this.router.navigateByUrl('/');
        }

        // SE RELLENA EL FORMULARIO CON LOS DATOS DEL HEROE
        // SE UTILIZA RESET Y NO SETVALUE PARA MAYOR FACILIDAD YA QUE CON SETVALUE SE DEBERIA DE ESPECIFICAR CADA CAMPO
        // MIENTRAS QUE CON EL RESET SE LLENAN AUTOMATICAMENTE LOS CAMPOS QUE EL HERO Y EL FORMULARIO TIENEN EN COMUN (EN ESTE CASO TODOS)
        this.heroForm.reset( hero );
        return;
      });

  }


  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero; // se castea el valor del formulario a Hero para que no haya problemas con el tipado
    return hero;
  }

  onSubmit():void {

    if ( this.heroForm.invalid ) return;

    if ( this.currentHero.id ) {
      this.heroesService.updateHero( this.currentHero )
        .subscribe( hero => {
          this.showSnackbar(`Super Heroe ${ hero.superhero } actualizado!`);
        });

      return;
    }else{
      this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {
        // TODO: mostrar snackbar, y navegar a /heroes/edit/ hero.id
        this.router.navigate(['/heroes/edit', hero.id ]);
        this.showSnackbar(`Super Heroe ${ hero.superhero } creado!`);
      });
    }


  }

  onDeleteHero():void{
    if(!this.currentHero.id) return;
    const dialogRef = this.dialog.open(ModalDeleteHeroeComponent, {
      data: this.heroForm.value //Se pasa el valor del formulario al modal
    });

    // PRIMER FORMA DE TRABAJARLO
    //Se ejecuta luego de que el modal es cerrado, se realizo una configuración en dicho modal de modo que dependiendo del boton escogido
    //Al cerrarse retornara false o true
    /*
    dialogRef.afterClosed()
    .pipe(
      tap(result=>console.log(result)) //Se muestra en consola el valor que se retorna al cerrar el modal
    )
    .subscribe(result => {
      //result es el valor que se retorna al cerrar el modal
      if(!result) return; //Si el valor es false no se hace nada
      this.heroesService.deleteHero(this.currentHero.id!)
        .subscribe( resp => {
          this.showSnackbar(`Super Heroe ${ this.currentHero.superhero } eliminado!`);
          this.router.navigate(['/heroes']);
        });

    });
    */

    // OTRA FORMA DE TRABAJARLO SERIA DE LA SIGUIENTE MANERA
    dialogRef.afterClosed()
      .pipe(   // Realmente para comparar resultados en el filter seria result === valor_deseado, pero ya que el result en este caso sera un booleano no es necesario
        filter( (result: boolean) => result ), // El filter recibe el resultado, si el valor no es true retorna y no se ejecuta el siguiente codigo
        switchMap( () => this.heroesService.deleteHero( this.currentHero.id )), //en este caso si se retorna true se ejecuta el switchMap
        filter( (wasDeleted: boolean) => wasDeleted ), //si todo en switchMap se ejecuta correctamente se ejecuta el siguiente filter
        // el cual actua de la misma manera que el primer filter, por lo tanto permite proseguir con el siguiente codigo
      )
      .subscribe(() => { //El suscribe tendra el valor de wasDeleted que es el valor que retorna el switchMap, en este caso ya no sera necesario, por lo tanto no se coloca
        this.router.navigate(['/heroes']);
      });
  }

  showSnackbar( message: string ):void { //Muestra un modal en la parte inferior de la pantalla con un mensaje y un boton de cerrar
    // que funciona como una alerta snackbar
    this.snackbar.open( message, 'done', {
      duration: 2500,
    })
  }
}
