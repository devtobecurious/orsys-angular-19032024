import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'twt-discover-obs',
  standalone: true,
  imports: [],
  templateUrl: './discover-obs.component.html',
  styleUrl: './discover-obs.component.css'
})
export class DiscoverObsComponent implements OnInit {

  ngOnInit(): void {
    console.log('*** DEBUT ***');

    console.info("SYNC !!");


    setTimeout(() => {
      console.info("ASYNC !!");
      // C'est ici qu'on va exécuter une regex !!!!!
      // je veux informer le component que le traitement est terminé
    }, 0);


    const obs$ = new Observable<string>(observer => { // LAZY
      console.info('OBS - DEBUT'); // Si on appelle l'api

      setTimeout(() => {
        observer.next('GOUTTE EAU 01');
        observer.next('GOUTTE EAU 02');
        observer.complete();
      }, 1500);

      observer.next('GOUTTE EAU 03');
    });

    obs$
    .pipe(
      map(value => { return value.toUpperCase(); }), 
      map(value => { return value.substring(0, 2); }),
    )
    .subscribe({
      next: (value) => { console.info('j arrose ma plante avec ' + value) }
    }); 
    //obs$.subscribe(); // Chaque subscribe déclenche l'execution de la fonction passée à new Observable


    console.log('*** FIN ***');
  }

}
