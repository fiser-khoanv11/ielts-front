import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() parts: Array<{ first: number, last: number }>;
  @Input() text: string;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {
    // console.log(this.appHighlight);
    this.highlight();
  }

  ngOnChanges() {
    console.log('on change');
    this.highlight();
  }

  highlight() {
    // console.log('highlighting...');
    console.warn(this.parts);

    // xoa tat ca children
    this.renderer.detachView(this.el.nativeElement.childNodes);

    // tao lai cac children
    let arr = [ 0 ];
    for (let i = 0; i < this.parts.length; i++) {
      arr.push(this.parts[i]['first']);
      arr.push(this.parts[i]['last']);
    }

    let strArr: Array<{text: string, color: string}> = [];
    for (let i = 0; i < arr.length; i++) {
      let str = this.text.substring(arr[i], arr[i + 1]);

      if (i % 2 == 1) {
        strArr.push({text: str, color: 'pink'});
      } else {
        strArr.push({text: str, color: 'none'});
      }
    }

    for (let i = 0; i < strArr.length; i++) {
      let render = this.renderer.createElement(this.el.nativeElement, 'span');
      this.renderer.createText(render, strArr[i].text);
      render.style.backgroundColor = strArr[i].color;
    }

    

    // this.renderer.detachView(this.el.nativeElement)

    // this.renderer.detachView([ this.el.nativeElement ]);
    // console.warn(this.el.nativeElement);
  }

}
