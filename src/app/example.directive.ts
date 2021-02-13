import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-color]',
})
export class ExampleDirective {
  constructor(elemRef: ElementRef) {
    elemRef.nativeElement.style.backgroundColor = 'Red';
    elemRef.nativeElement.style.background =
      'linear-gradient(to left,blue,lightblue)';
    elemRef.nativeElement.style.color = 'white';
    elemRef.nativeElement.style.border = 'none';
    elemRef.nativeElement.style.outline = 'none';
    elemRef.nativeElement.style.padding = '12px 14px';

    // To add bootstrap class to button
    // elemRef.nativeElement.classList.add('btn');
    // elemRef.nativeElement.classList.add('btn-sm');
    // elemRef.nativeElement.classList.add('btn-primary');
  }
}
