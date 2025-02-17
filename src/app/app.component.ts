import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facebook';
  
  constructor(

  ) { }
  private lenis!: Lenis

  ngOnInit() {
    this.lenis = new Lenis({
      lerp: 0.09,  // smoothness of the scroll
      smoothWheel: true,  // enables smooth scrolling with the wheel
      // infinite:true
    });

    // Request animation frame for Lenis
    const raf = () => {
      this.lenis.raf(performance.now());
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf); 
  }

  

  ngOnDestroy() {
    // Clean up when the component is destroyed
    this.lenis.destroy();
  }

  ngAfterViewInit() {

    gsap.from('.fade-in', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
    });
  }
}
