
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class MovieService{



    private query: string;
    //private API_KEY: string = environment.THEMOVIEDB_API_KEY;
    //private API_URL: string = environment.THEMOVIEDB_API_URL;
    private API_KEY: string = '92b418e837b833be308bbfb1fb2aca1e';
    private API_URL: string = 'https://api.themoviedb.org/3/';
    private URL: string = this.API_URL;
    constructor(private _http: Http){
    }

    search(terms: Observable<string>) {
        return terms.debounceTime(400)
          .distinctUntilChanged()
          .switchMap(term => this.searchEntries(term));
      }

      searchEntries(term) {
        if(!term){
            return "false";
        }else{
            let response = this._http
            .get(this.URL+`search/movie?api_key=${this.API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`)
            .map(res => res.json());
            return response;
        }
        

      }
}

