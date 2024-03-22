import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../models/characters';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'twt-edit-characters',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './edit-characters.component.html',
  styleUrl: './edit-characters.component.css'
})
export class EditCharactersComponent {
  @Input({ required: true}) item: Character | undefined;

  @Output() save = new EventEmitter<Character>();
  @Output() cancel = new EventEmitter<Character>();

  clickToEdit(): void {
    this.save.emit(this.item);
  }

  clickToCancel(): void {
    this.cancel.emit(this.item);
  }
}
