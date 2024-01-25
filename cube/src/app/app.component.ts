import { Component } from '@angular/core';
import { ServerComponent } from './server/server.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cube';
  name:any
  
  onChanges(){
    this.name='chnages'
  }
}
