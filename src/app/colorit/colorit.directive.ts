import { Directive, Renderer2, ElementRef, OnInit, HostListener} from "@angular/core";

@Directive({
    selector:"[colorIt]"
})

export class ColorItDirective implements OnInit{
    constructor(private elRef:ElementRef , private renderer:Renderer2){
    }

    ngOnInit(){
        // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    }

    @HostListener('mouseenter') mouseover(eventData :Event){
        this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue',false,false);
    }
    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent',false,false);
    }
}