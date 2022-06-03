import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  //privado sempre coloca _ no início da palavra
  constructor(private _http: HttpClient) { }

  obterRepositorios(): Observable<String> {
    //constante sempre maiúscula
    const URL = "https://api.github.com/search/repositories?q=language:C#&sort=stars&page=1";

    //o String dentro do get é o tipo do retorno que eu quero, posso escolher outros e ele tem que ser o mesmo da Observable
    return this._http.get<String>(URL);
  }
}
