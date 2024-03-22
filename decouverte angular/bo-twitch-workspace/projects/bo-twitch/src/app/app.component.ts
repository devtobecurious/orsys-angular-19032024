import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListGamesComponent } from './features/games/components/list-games/list-games.component';
import { DiscoverObsComponent } from './learnings/observables/components/discover-obs/discover-obs.component';
import { ListCharactersComponent } from './features/characters/components/list-characters/list-characters.component';
import { LoggerService } from './shared/tools/services/logs/logger.service';
import { MainMenuComponent } from './shared/ui/main-menu/main-menu.component';
import { AlArracheService } from './alarrache.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  characters_ = inject(AlArracheService).store;
  title = signal<string>('Bienvenue');
  titreMaj = computed(() => this.title().toUpperCase());  // selector, en lecture seule

  changeTitle(): void {
    this.title.set('Nouveau titre');
  }

  constructor(private readonly logger: LoggerService) {
    this.logger.log('AppComponent created');
  }
}
