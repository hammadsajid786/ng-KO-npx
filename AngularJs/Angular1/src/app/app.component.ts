import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: ['#tes { border: 2px soild red; }']
})
export class AppComponent {
  title = 'Angular1';
}
