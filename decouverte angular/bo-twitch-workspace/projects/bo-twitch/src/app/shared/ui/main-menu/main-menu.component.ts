import { Component, inject } from '@angular/core';
import { WeatherDisplayComponent } from '../weather-display/components/weather-display.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'twt-main-menu',
  standalone: true,
  imports: [WeatherDisplayComponent, RouterLink],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  private readonly router = inject(Router);
  private readonly routerEnCours = inject(ActivatedRoute);

  goToCharacters(): void {
    this.router.navigate(['characters']);
    //this.routerEnCours.snapshot['data'] = [{ title: 'characters' }
  }
}
