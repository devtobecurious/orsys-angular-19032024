import { Routes } from '@angular/router';
import { ListCharactersComponent } from './features/characters/components/list-characters/list-characters.component';

export const routes: Routes = [
    {
        path: 'characters',
        component: ListCharactersComponent,
        data: { title: '' },
        canActivate: [
            
        ]
    }
];
