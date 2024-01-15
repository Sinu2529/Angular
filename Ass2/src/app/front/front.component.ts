import { Component, EventEmitter,Output } from '@angular/core';

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

  constructor() {}
    onAddServer() {
      this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent})
    }

      onAddBlueprint() {
        this.blueprintCreated.emit({
          serverName: this.newServerName,
          serverContent: this.newServerContent})
      }
    
  

}
