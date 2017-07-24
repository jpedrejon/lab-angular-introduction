import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: Array<Object> = [
    {
      src: 'assets/descarga.jpeg',
      description: 'miami'
    }, {
      src: 'assets/descarga2.jpeg',
      description: 'barcleona'
    }, {
      src: 'assets/descarga3.jpeg',
      description: 'madrid'
    }
  ];
};
