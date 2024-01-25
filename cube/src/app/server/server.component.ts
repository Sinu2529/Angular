import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
 
  @Input() name:string ='';
  // constructor(){
  //   console.log('constructor called')
  // }

  // ngOnInit(){
  //   console.log('ngoninit called')
  // }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngonchnages called')
    console.log(changes)
  }

  // ngDoCheck(){
  //   console.log('ngDoChck called')
  // }

  // ngAfterContentInit(){
  //   console.log('ngAfterContentInit called')
  // }

  // ngAfterContentChecked(){
  //   console.log('ngAfterContentChecked called')
  // }

  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit called')
  // }

  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked called')
  // }

  // ngOnDestroy(){
  //   console.log('ngOnDestroy called')
  // }

  onAddserver(){
    console.log(this.name)
  }

  

}
