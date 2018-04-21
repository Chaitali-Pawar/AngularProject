import { Directive ,ElementRef,HostListener,Renderer2} from '@angular/core';

// Element ref is to get the reference of element currently in use and it will be injected intot the constructor
// HostListener will listen to various mouse events and inform when a particular mouse event is triggered on element.

@Directive({
  selector: '[appHighlight]'
  // this selector becomes the custom directive
})
export class HighlightDirective {

  constructor(private el :ElementRef,
            private renderer :Renderer2) { }

  @HostListener('mouseenter') onMouseEnter (){
    this.renderer.addClass(this.el.nativeElement,'highlight');
  }

  @HostListener('mouseleave') onMouseLeave (){
    this.renderer.removeClass(this.el.nativeElement,'highlight');
  }

}
