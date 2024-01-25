import { Component, EventEmitter,Output,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrl: './front.component.css'
})
export class FrontComponent {
  @Output() serverCreated=new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  newServerName='';
  newServerContent='';
  @ViewChild('serverContent')
  serverContent!: ElementRef;

  constructor() {}
  // local ref
    onAddServer(nameInput: HTMLInputElement) {
      this.serverCreated.emit({
        // local ref
        serverName: nameInput.value,
        // view child
        serverContent: this.serverContent.nativeElement.value})
    }

      onAddBlueprint() {
        this.blueprintCreated.emit({
          serverName: this.newServerName,
          serverContent: this.newServerContent})
      }
    
  

}
