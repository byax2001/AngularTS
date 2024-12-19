import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-card',
  standalone: false,

  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent implements OnInit {

  @Input() //Es inportante usar el decorador @Input para poder recibir datos desde el componente padre
  public url_image: string = "";

  public hasloaded:boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  public onLoaded():void{
    this.hasloaded = true;
  }
}
