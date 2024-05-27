import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISeachReasponse, IGif } from '../interfaces/gifs.interface';

@Injectable({providedIn: 'root'})

export class GifsService {

  private ApiKey:      string = 'eTSTCpIqKoEyepfGvluwwPwge4U37lnB';
  private BaseUrl:     string = 'https://api.giphy.com/v1/gifs';
  private _tagHistory: string[] =  [ ];
  public gifs: IGif[] = [];

  constructor(private http : HttpClient){
    this.loadLocalStorage();
  }

  get TagHistory(): string[] {
    return this._tagHistory
  }

/**
 *
 * @funtion searchTag realiza la busqueda a partir del valor del parámetro que recibe
 * @returns
 */
 searcTag(tag:string)  {
    if( tag.length === 0 ) return;

    tag = tag.toLocaleLowerCase()
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key',this.ApiKey)
    .set('q', tag)
    .set('limit','10')


    this.http.get<ISeachReasponse>( `${this.BaseUrl}/search`, {params} )
    .subscribe(response => {
      this.gifs = response.data;
    })

  }

  private saveLocalStarage(): void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory))
  }

  private loadLocalStorage() : void {
    if(!localStorage.getItem('history')) return;
      this._tagHistory = JSON.parse(localStorage.getItem('history')!);
      if(this._tagHistory.length === 0) return;
        this.searcTag(this._tagHistory[0])


  }

  private organizeHistory(tag:string) : void {
     if(this._tagHistory.includes(tag)){
       this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag)
     }
     this._tagHistory.unshift(tag)
     this._tagHistory = this._tagHistory.splice(0,10)
     this.saveLocalStarage()
  }
}
