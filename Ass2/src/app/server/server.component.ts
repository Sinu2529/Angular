import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent { 
  @Input() element: {type:string, name:string, content:string};

  constructor() {
    this.element = {
      type: 'text',
      name: 'server',
      content: 'This is a server.'
    };
  }

  ngOnIt(){
    
  }


}
