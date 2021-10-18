import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnhover]'
})
export class OnhoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onOver() {
    this.el.nativeElement.style.backgroundColor = 'goldenrod';
  }

  @HostListener('mouseout') onOut() {
    this.el.nativeElement.style.backgroundColor = '#1a2555';
  }
}
