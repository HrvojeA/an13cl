import { Component,OnInit } from '@angular/core';
declare function raiseYourHand(): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit(){
    raiseYourHand()
  }
  title = 'clovio';
}
