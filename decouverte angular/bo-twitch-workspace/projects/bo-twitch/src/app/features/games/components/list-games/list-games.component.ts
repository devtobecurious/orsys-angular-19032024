import { Component } from '@angular/core';
import { Games } from '../../models';
import {  NgFor, NgIf } from '@angular/common';
import { FiltersGamesComponent } from '../filters-games/filters-games.component';

const imports=  [NgFor, NgIf, FiltersGamesComponent];

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: imports,
  templateUrl: './list-games.component.html',
  //template: `<div></div>`,
  styleUrl: './list-games.component.css',

})
export class ListGamesComponent {
  titreFiltre = 'Les filtres';
  games: Games = [{ id: 1, date: new Date(), titre: 'Super partie' }, { id: 2, date: new Date(), titre: 'Triste partie' }];

  addFakeGame(): void {
    this.games.push({ id: this.games.length + 1, date: new Date(), titre: `${this.games.length + 1} title` })
  }

  removeFakeGame(): void {
    this.games.pop();
  }

  filterGames(content: string): void {
    console.info(content);
  }
}
