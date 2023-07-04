import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHandleMenu]',
})
export class HandleMenuDirective implements OnInit {
  public animationState = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    const submodule = this.elRef.nativeElement.querySelector('.submenu');
    if (submodule.classList.contains('hide')) {
      this.renderer.removeClass(submodule, 'hide');
      this.renderer.addClass(submodule, 'show');
    } else {
      this.renderer.addClass(submodule, 'hide');
      this.renderer.removeClass(submodule, 'show');
      this.renderer.setStyle(submodule, 'overflow', 'hidden');
    }
  }

  ngOnInit(): void {}
}
