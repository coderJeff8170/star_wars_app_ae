
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[appBlockCopyPaste]'
})
export class BlockCopyPasteDirective {
  constructor(private el: ElementRef) {}

  // @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
  //   e.preventDefault();
  // }
 
}
