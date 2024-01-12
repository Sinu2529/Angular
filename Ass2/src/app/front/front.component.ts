import { Component } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrl: './front.component.css'
})
export class FrontComponent {
  newServerName='';
  newServerContent='';

  constructor() {}
    onAddServer() {
      // this.serverElements.push({
      //   type:'server',
      //   name: this.newServerName,
      //   content: this.newServerContent
      // });
    }

      onAddBlueprint() {
        // this.serverElements.push({
        //   type: 'blueprint',
        //   name:this.newServerName,
        //   content: this.newServerContent
        // })
      }
    
  

}
