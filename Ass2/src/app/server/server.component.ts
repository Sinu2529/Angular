import { Component,Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ServerComponent { 
  @Input() element: {type:string, name:string, content:string};

  constructor() {
    console.log('constructor callled')
    this.element = {
      type: 'text',
      name: 'server',
      content: 'This is a server.'
    };

    
  }

  ngOnInt(){
    console.log('ngOnInit called')

    
  }


}
