import { Injectable } from '@angular/core';

import { HttpClient, URLSearchParams } from "@angular/common/http";

// import { URLSearchParams } from "../../../node_modules/@angular/common/http";



import 'rxjs/Rx';
//import { of } from 'rxjs/observable/of';
// import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
  private apikey:string = "AIzaSyADLT203TpM6lAKZMqSUcYF-yMzleolQqs";
  
  private playlist: string= "UUJusEPcWIH9EyYSCqGP-1ew";
  private nextPageToken: string= "";
 

  constructor( public http: HttpClient) { }

  getVideos(){

    let url = `${ this.youtubeUrl }/playlistItems`;
    let params = new URLSearchParams();

    params.set( 'part','snippet' );
    params.set( 'maxResults','10' );
    params.set( 'playlistId', this.playlist );
    params.set( 'key', this.apikey );

    return this.http.get(url, { search: params }) 
        .map( res =>{
          console.log(res.json() );
          this.nextPageToken = res.json().nextPageTOken;
          
        })
  }
}
