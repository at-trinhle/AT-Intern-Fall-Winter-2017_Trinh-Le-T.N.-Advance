import { Component } from '@angular/core';

@Component({
  selector : 'app-helloword',
  templateUrl: './helloword.component.html',
  styles: [`ul{list-style:none};}`]
})
export class HellowordComponent {
  name1 = 'Trinh';
  getData(value: any) {
    console.log(value);
  };
  myMethod(event: any){
    console.log(event);
  };
  heroName = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado','ABC'];
}
