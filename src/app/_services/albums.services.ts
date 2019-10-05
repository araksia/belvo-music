import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {  map } from 'rxjs/operators';

@Injectable()
export class AlbumsService {

  constructor(public http: HttpClient) { }
getAlbums(limit: number) {
  return this.http
    .jsonp(
      `${environment.apiEndpoint}us/rss/topalbums/limit=${limit}/json?callback=JSONP_CALLBACK`,
      'jsonp'
    )
    .pipe( 
      map(data => {
        return data['feed'];
      })
    );
}
}