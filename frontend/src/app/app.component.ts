import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'ecommerce-frontend';


  firstName = 'AKHIL';
  lastName = 'SURA';

  sayHello(value: string){

    alert("Button Clicked :"+ value);
    console.log(`Value : ${value}`);
  }

}
