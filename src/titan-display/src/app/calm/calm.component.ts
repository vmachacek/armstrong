import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calm',
  templateUrl: './calm.component.html',
  styleUrls: ['./calm.component.scss']
})
export class CalmComponent implements AfterViewInit {

  @ViewChild('video')
  video: ElementRef;

  @ViewChild('container')
  container: ElementRef;


  muted: boolean = true;

  constructor(private router: Router) {

    const w = window as any;

    w.getRouter = () => {
      return this.router;
    }

  }

  ngAfterViewInit() {
    const index = Math.ceil(Math.random() * 14);
    this.container.nativeElement.style.backgroundImage = `url('/assets/img/${index}.jpg')`;
    console.info()
  }

  toggleVolume() {
    this.muted = !this.muted;
    this.video.nativeElement.muted = this.muted;
    this.video.nativeElement.volume = 0.5;
  }
}
