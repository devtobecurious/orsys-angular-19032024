import { Injectable, computed, signal } from "@angular/core";
import { Character, Characters } from "./features/characters/models/characters";

@Injectable({
    providedIn: 'root'
})
export class AlArracheService {
    store = signal<Characters>([]);
    editableChars = computed(() => this.store().filter(char => char.id > 0));
    nbChars = computed(() => this.store().length);  // selector, en lecture seule


    setOne(char: Character): void {
        this.store.set([...this.store(), char]);
    }
}