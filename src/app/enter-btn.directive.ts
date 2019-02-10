import { Directive, Renderer, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { searchService } from './app.service';

@Directive({
  selector: '[appEnterBtn]'
})
export class EnterBtnDirective {
  constructor(
    public itunes: searchService,
    private el: ElementRef,
    private renderer: Renderer
  ) {}
  colorRed = 'red';
  @HostListener('mouseover') changeColor() {
    console.log('Changecolor');
    this.renderer.setElementStyle(
      this.el.nativeElement,
      'backgroundColor',
      'yellow'
    );
  }
}
