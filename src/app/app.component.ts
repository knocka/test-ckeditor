import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  content: string;
  constructor() {
    this.content = '<p>Hello <strong>World (台北市) !</strong></p>'
  }
  get diagnostic() { return JSON.stringify(this.content) }
  onSubmit() { 
    console.log(this.content)
    this.content=""; 
  }
}
