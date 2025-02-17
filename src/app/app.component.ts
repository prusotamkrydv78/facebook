import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap'; 
import { LocomotiveScrollService } from './shared/services/locomotive.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private scrollService:LocomotiveScrollService ) {}

  ngAfterViewInit() {
    this.scrollService.initScroll();

    gsap.from('.fade-in', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
    });
  }
}
