import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector:'[basic]',

})
export class Basic implements OnInit{
    @Input() defaultColor:string='transparent'
    @Input() changeColor: string='orange'


    @HostBinding('style.backgroundColor')
    backgroundColor: string ='transparent';


    @HostListener('mouseenter') mouseover(eventData:Event){
        // this.elementRef.nativeElement.style.backgroundColor='green';
        this.backgroundColor=this.defaultColor;
    }

    @HostListener('mouseleave') mouseleave(eventData:Event){
        // this.elementRef.nativeElement.style.backgroundColor='transparent';
        // this.backgroundColor='transparent'
        this.backgroundColor=this.changeColor

    


    }
    constructor(private elementRef: ElementRef){
                
    }

    ngOnInit() {
        // this.elementRef.nativeElement.style.backgroundColor='green';
        
    }

}