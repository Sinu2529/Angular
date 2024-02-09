import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipes';
  loadedFeature='recipes';

  onNavigation(feature: string){
    this.loadedFeature =feature;

  }
}
