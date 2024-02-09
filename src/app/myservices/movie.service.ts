import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor() { }
  
  
  movieList = [

    {id:1, title:'The Godfather', year: '1972', director: 'Francis ford Coppola' },
    {id:2, title:'Millers Crossing', year: '1990', director: 'the coen Brothers' },
    {id:3, title:'GhostBusters', year: '1972', director: 'Martin Scorsese' },
    {id:4, title:'Goodfellas', year: '1989', director: 'Martin Scorsese' }
   
   ];
   getMovies() {
return this.movieList;


   }



  }
