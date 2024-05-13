import { Component } from '@angular/core';
import { ConsoapiService } from '../../../shared/services/consoapi.service';
import { Movie } from '../../../shared/models/movie.model';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrl: './demo9.component.scss'
})
export class Demo9Component {

  listeMovie! : Movie[]

  constructor(private _apiService : ConsoapiService){

  }

  methode(){
    this._apiService.getAll().subscribe({
      next : (data : Movie[]) => {this.listeMovie = data} ,
      error : (error) => console.log(error.message),
      complete : () => console.log("oh j'ai fini")
    })
  }
}
