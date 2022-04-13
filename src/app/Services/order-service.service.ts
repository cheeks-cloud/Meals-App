import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="


  getMealList(tamTam: string){
    return this.http.get<any>( this.baseUrl + `${tamTam}`)
  }

}
//tamTam is parameter for food name