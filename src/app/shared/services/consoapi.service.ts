import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ConsoapiService {

  private url : string = "https://localhost:7158/api/"

  constructor(
    private _client : HttpClient
  ) { }

  getAll() {
   return this._client.get<Movie[]>(this.url+ "movie")
  }
}
