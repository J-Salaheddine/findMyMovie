import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers: [MovieService]

})
  export class MoviesListComponent  {
  searchTerm$ = new Subject<string>();
  results: Object;

  constructor(private mvs : MovieService) { 
    this.mvs.search(this.searchTerm$)
    .subscribe(results => {
      this.results = results.results;
      });
  }
}
