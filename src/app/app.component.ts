import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  typesOfShoes: string[] = ['Winner Pooh', 'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
