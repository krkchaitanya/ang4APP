import { HostListener, ElementRef,Directive, Renderer2, OnInit} from "@angular/core";
import { Renderer } from "@angular/core/src/render/api";

@Directive({
    selector:"[colorIt]"
})

export class ColorItDirective implements OnInit{

constructor(private elementRef:ElementRef, private renderer:Renderer2){}

ngOnInit(){

}

@HostListener("mouseenter") mouseover(eventData:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','grey',false,false);
}

@HostListener('mouseleave') mouseleave(eventData:Event){
 this.renderer.setStyle(this.elementRef.nativeElement,'background-color','yellow',false,false);
}

}