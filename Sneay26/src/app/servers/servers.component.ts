import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowedNewServer= false;
  serverCreationStatus='No Server is created';
  serverName='';
  onserver= false;
  servers= ['test1','test2']

  constructor() {
    setTimeout(()=> {
      this.allowedNewServer =true;
    }, 2000);
  }
  ngOnInit(): void {
    
  }
  onCreationServer(){
    this.onserver=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus ='Server was created Name is'+ this.serverName;
  }
  onUpdateServer(event: Event) {
    this.serverName=(<HTMLInputElement>event.target).value;
    }
}
