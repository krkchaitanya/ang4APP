// import {Directive, ElementRef, OnInit} from "@angular/core";

// @Directive({
//     selector:'[appBasicHighlight]'

// })
// export class BasicHighlightDirective implements OnInit{

//     constructor(private elementRef:ElementRef){}

// ngOnInit(){
//     this.elementRef.nativeElement.style.backgroundColor='green';
// }

// }
import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
    selector:"[appBasicHighlight]"

})

export class BasicHighlightDirective{
    constructor(private elementRef:ElementRef){

    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor="violet";
    }
}