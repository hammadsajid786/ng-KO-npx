import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  inputTextBox = '';
  @Input() inp;
  @Output() outx = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  btnClicked() {
    this.outx.emit(this.inputTextBox);
  }
}
