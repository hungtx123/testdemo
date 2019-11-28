import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
user = 8;
  constructor() { }

  ngOnInit() {
  }
@Output() myClick = new EventEmitter();
  addForParent() {
    this.myClick.emit(this.user);
  }
}
