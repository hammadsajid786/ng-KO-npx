import { Component, OnInit } from '@angular/core';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  tempx = "value";
  constructor() { }

  transferredValue;
  ngOnInit() {
  }

  OutClicked(emitedValue) {
    console.log(emitedValue);
    this.transferredValue = emitedValue;
  }

}
