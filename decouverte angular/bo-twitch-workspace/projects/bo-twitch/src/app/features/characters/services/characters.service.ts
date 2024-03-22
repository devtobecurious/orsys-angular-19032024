import { Injectable } from '@angular/core';
import { Observable, map, retry } from 'rxjs';
import { Character, Characters } from '../models/characters';
import { HttpClient } from '@angular/common/http';

type ApiOnePeopleType = {
  name: string,
  gender: string
}

type ApiResultType = {
  results: ApiOnePeopleType[]
}

@Injectable({
  providedIn: 'root' // singleton : une seule instance
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }

  updateOne(item: Character): Observable<Character> {
    return this.httpClient.put<Character>('https://swapi.dev/api/people', item);
  }

  getAll(): Observable<Characters> {
    // je retourne toujours un observable : je crée un service stateless, 
    // donc je ne subscribe pas dans le service
    return this.httpClient.get<ApiResultType>('https://swapi.dev/api/people').pipe(
      map(apiResult => {
        const array: Characters = [];

        let i = 0;
        apiResult.results.forEach(apiOnePeople => {
          const character: Character = {
            name: `${apiOnePeople.name} (${apiOnePeople.gender})`,
            id:  i ++
          }
          array.push(character);
        });

        return array;
      }),
      retry(3)
    );
  }
}
