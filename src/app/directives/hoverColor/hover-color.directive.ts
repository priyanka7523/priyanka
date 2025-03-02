import { Directive, ElementRef, HostListener, Input, input,  } from '@angular/core';

@Directive({
  selector: '[appHoverColor]',
  standalone: true
})
export class HoverColorDirective {

  @Input() defaultColor: string = 'black'; // Default text color
  @Input() hoverColor: string  = 'orange'; // color on hover

  // defaultColor = input<string>('black');
  // hoverColor = input<string>('orange');

  constructor(private el: ElementRef) {
    this.setColor(this.defaultColor); // set  initial color
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.hoverColor);   // change to hover color on mouse enter
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(this.defaultColor);   // change back to default color on mouse Leave
  }

  private setColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
  
}
