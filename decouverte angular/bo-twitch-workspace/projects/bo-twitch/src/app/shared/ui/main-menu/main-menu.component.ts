import { Component } from '@angular/core';
import { WeatherDisplayComponent } from '../weather-display/components/weather-display.component';

@Component({
  selector: 'twt-main-menu',
  standalone: true,
  imports: [WeatherDisplayComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
