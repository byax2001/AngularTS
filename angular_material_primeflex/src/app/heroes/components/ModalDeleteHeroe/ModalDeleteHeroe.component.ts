import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'modal-delete-heroe',
  templateUrl: `./ModalDeleteHeroe.component.html`,
  styles: []
})
export class ModalDeleteHeroeComponent {
  readonly dialogRef = inject(MatDialogRef<ModalDeleteHeroeComponent>);
  readonly data = inject<Hero>(MAT_DIALOG_DATA);


  onNoClick(): void {
    //Se cierra el modal y se envia un false
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    //Se cierra el modal y se envia un true
    this.dialogRef.close(true);
  }
}
