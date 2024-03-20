import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { VideoGames } from '../../models';

@Component({
  selector: 'twt-filters-games',
  standalone: true,
  imports: [],
  templateUrl: './filters-games.component.html',
  styleUrl: './filters-games.component.css',
  
})
export class FiltersGamesComponent {
  videoGames: VideoGames = [ {id: 1, label: 'Abe'}, {id: 2, label: 'God of war 3'}]

  @Input({required: true}) title = '';
  @Output() filter = new EventEmitter<string>();


  clickToFilter(): void {
    this.filter.emit('abe');
  }
}
