import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public titulo!: string; 
  public texto!: string;
  
  classToDiv = {};

  constructor(){

    this.classToDiv = {
      'text-sucess':true
    };
  }

ngOnInit(){
  this.titulo! = 'Importante';
  this.texto! = 'Beber água é muito importante para a vida';

}


}
