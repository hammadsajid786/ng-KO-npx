import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('serverContentInput', { static: false }) serverContentInput: ElementRef;
  // newServerName = '';
  // newServerContent = '';

  onAddServer(nameInput: HTMLInputElement) {
    if (this.CheckValidation([nameInput.value, this.serverContentInput.nativeElement.value]))
      this.serverCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      });

  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    if (this.CheckValidation([nameInput.value, this.serverContentInput.nativeElement.value]))
      this.blueprintCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      });
  }

  CheckValidation(inputVal: string[]) {
    for (let index = 0; index < inputVal.length; index++) {
      if (inputVal[index] === '') {
        alert('Input Required');
        return false;
      }
    }

    return true; // Default True
  }
}
