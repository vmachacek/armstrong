import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-calm',
  templateUrl: './calm.component.html',
  styleUrls: ['./calm.component.scss']
})
export class CalmComponent implements AfterViewInit, OnInit {

  @ViewChild('video')
  video: ElementRef;

  @ViewChild('container')
  container: ElementRef;

  startTime: Date;

  muted: boolean = false;

  numberOfCycles : number = 1;

  timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }

  ngOnInit() {
    this.startTime = new Date();
  }

  ngAfterViewInit() {
    const index = Math.ceil(Math.random() * 13);
    this.container.nativeElement.style.backgroundImage = `url('/assets/img/${index}.jpg')`;
    this.video.nativeElement.volume = 0.1;
    interval(10000).subscribe(f=> this.numberOfCycles++);
  }

  toggleVolume() {
    this.muted = !this.muted;
    this.video.nativeElement.muted = this.muted;
    this.video.nativeElement.volume = 0.5;
  }
}
