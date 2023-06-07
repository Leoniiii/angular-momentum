import {
  Directive,
  AfterViewInit,
  ElementRef,
  Renderer2,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appTaskCompleted]',
})
export class TaskCompletedDirective implements OnChanges, AfterViewInit {
  @Input() public appTaskCompleted = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.changeTextStyle();
  }

  ngAfterViewInit(): void {
    this.changeTextStyle();
  }

  private changeTextStyle() {
    if (this.element) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'text-decoration',
        this.appTaskCompleted ? 'line-through' : 'none'
      );
    }
  }
}
