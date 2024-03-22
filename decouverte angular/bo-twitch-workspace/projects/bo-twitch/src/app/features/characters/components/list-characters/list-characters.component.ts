import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character, Characters } from '../../models/characters';
import { EditCharactersComponent } from '../edit-characters/edit-characters.component';
import { CharactersService } from '../../services/characters.service';
import { Subscription } from 'rxjs';
import { LoggerService } from '../../../../shared/tools/services/logs/logger.service';

@Component({
  selector: 'twt-list-characters',
  standalone: true,
  imports: [EditCharactersComponent],
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.css'
})
export class ListCharactersComponent implements OnInit, OnDestroy {
  characters: Characters = []
  itemToEdit: Character | undefined;
  private subscription = new Subscription();

  constructor(private service: CharactersService, 
              private readonly logger: LoggerService) {
  }

  ngOnInit(): void {
    const obs$ = this.service.getAll(); // lazy, ça ne fait rien

    const sub = obs$.subscribe({
      next: (characters) => {
        this.characters = characters;
      },
      error: (err) => {
        this.logger.log(err);
        // this.logger.log(err);
      }
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  editOne(item: Character): void {
    this.itemToEdit = item;
  }

  saveOne(item: Character): void {
    this.service.updateOne(item).subscribe(char => {
      this.itemToEdit = char;
    });
  }

  cancelEdition(item: Character): void {
    this.itemToEdit = undefined;
  }
}
