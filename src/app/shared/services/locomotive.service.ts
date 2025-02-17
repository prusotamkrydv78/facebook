import { Injectable, NgZone } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';

@Injectable({
  providedIn: 'root'
})
export class LocomotiveScrollService {
  private scroll!: LocomotiveScroll;

  constructor(private ngZone: NgZone) {}

  initScroll() {
    this.ngZone.runOutsideAngular(() => {
      this.scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true
      });
    });
  }

  updateScroll() {
    this.scroll.update();
  }
}
