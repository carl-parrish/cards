import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
    title: 'Neat tree',
    imageUrl: 'assets/tree.jpeg',
    userName: 'nature',
    content: 'I saw this neat tree today'
  },
    {
    title: 'Snowy Mountain',
    imageUrl: 'assets/mountain.jpeg',
    userName: 'mountainlover',
    content: 'Here is a picture of a snowy mountain'
  },
    {
    title: 'Mountain Biking',
    imageUrl: 'assets/biking.jpeg',
    userName: 'biking1222',
    content: 'I did some biking today'
  },
];
}
