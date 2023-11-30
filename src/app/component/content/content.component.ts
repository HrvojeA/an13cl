import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

   constructor( ) {}

  message = 'parent message';

  receiveMessage($event : string){
    this.message = $event;
  }

  ngOnInit() {

  }

}
