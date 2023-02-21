import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  // mensajes: any []=[];
  mensajes: any;

  constructor(private dataService: DataService) {
    

  }
  ngOnInit() {
    this.mensajes = this.dataService.getData();
    
  }
  escuchaClick(id:number){
    console.log('Click en:', id);


  }

  // consume data
  // ngOnInit() {
  //   this.dataService.getData()
  //   .subscribe((post:any[])=>{
  //     this.mensajes = post;

  //   });
  // }

}
