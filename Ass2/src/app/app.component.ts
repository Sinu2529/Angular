import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ass2';
  serverElements=[{type: 'server', name:'testservre', content:'just test server'}];
}
