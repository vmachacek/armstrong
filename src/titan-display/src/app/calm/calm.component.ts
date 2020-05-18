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

  muted: boolean = false;

  ngAfterViewInit() {
    const index = Math.ceil(Math.random() * 13);
    this.container.nativeElement.style.backgroundImage = `url('/assets/img/${index}.jpg')`;
    this.video.nativeElement.volume = 0.1;
  }

  toggleVolume() {
    this.muted = !this.muted;
    this.video.nativeElement.muted = this.muted;
    this.video.nativeElement.volume = 0.5;
  }
}
