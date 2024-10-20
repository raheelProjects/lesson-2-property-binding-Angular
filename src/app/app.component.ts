import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lesson 2: Property Binding';
  imgurl: string =
    'https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=';
  isVisible: boolean = true;

  names: string[] = ['raheel', 'bisham', 'rehman', 'sami'];

  enterName: string = '';

  addName() {
    this.names.push(this.enterName);
    this.enterName = '';
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }
}
