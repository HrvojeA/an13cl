import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  message: string = 'Child to parent'

  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  sendMessage (){
    this.messageEvent.emit(this.message);
  }
  ngOnInit(): void {
  }

}
