import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature: string = 'recipe'; // value could be 'recipe' or 'ShoppingList'

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
