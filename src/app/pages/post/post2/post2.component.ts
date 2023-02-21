import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})
export class Post2Component {
  //recibo del componente padre
  @Input () mensaje: any;  
  //envio evento desde el hijo
  @Output () clickPost = new EventEmitter<number>();//emite un numero


  onClick(){
    console.log(this.mensaje.id);
    this.clickPost.emit(this.mensaje.id);//emite el hijo recibe el padre 
  }

}
