import { Directive, Input } from '@angular/core';
import { ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appBlankSpace]'
})
export class BlankSpaceDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @Input() paras: string[];
  @Input() first: number;

  ngOnInit() {
    for (let j = 0; j < this.paras.length; j++) {
      let text = this.paras[j];
      while (text.includes('[]')) {
        text = text.replace('[]', '*{}*');
      }
      let array = text.split('*');

      let renderPara = this.renderer.createElement(this.el.nativeElement, 'p');

      for (let i = 0; i < array.length; i++) {
        if (array[i] == '{}') {
          let renderBold = this.renderer.createElement(renderPara, 'b');
          this.renderer.createText(renderBold, this.first.toString() + ' ');
          this.renderer.createElement(renderPara, 'input');
          this.first++;
        } else {
          let renderSpan = this.renderer.createElement(renderPara, 'span');
          this.renderer.createText(renderSpan, array[i]);
        }
      }
    }
  }

}
