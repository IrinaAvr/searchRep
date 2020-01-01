import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RepositoryModel } from './models/repository.model';



@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  public serviceUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '1728000',
        'Accept': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) {
    this.serviceUrl = "https://localhost:44358/api/Repositories/";
    //this.serviceUrl = "https://irinaavr.github.io/WebApi/api/Repositories/";
    //this.serviceUrl = "https://isracardwebapi.azurewebsites.net/api/Repositories/";
    
  }

  GetRepositoriesByKeyword(str:string){
    return this.httpClient.get(this.serviceUrl + 'GetRepositoriesByKeyword/' + str);
  }


  Bookmark(rep:RepositoryModel) {
    return this.httpClient.post<RepositoryModel[]>(this.serviceUrl + 'BookmarkRepository/', rep, this.httpOptions);
  }


  GetBookmarks(){
    return this.httpClient.get(this.serviceUrl + '/GetBookmarks');
  }


}
