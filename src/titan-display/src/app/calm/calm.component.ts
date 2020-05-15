import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calm',
  templateUrl: './calm.component.html',
  styleUrls: ['./calm.component.scss']
})
export class CalmComponent implements OnInit, AfterViewInit {

  @ViewChild('video')
  video: ElementRef;
  muted: boolean = true;

  constructor() { }

  ngOnInit(): void {
    const pictures = 14;
    const index = Math.ceil(Math.random() * pictures);
    document.body.style.backgroundImage = `url('/assets/img/${index}.jpg')`;
    document.body.addEventListener('keyup', this.toggleVolume);
  }

  ngAfterViewInit() {
    console.info(this.video.nativeElement.muted)
  }



  toggleVolume() {



    this.muted = !this.muted;
    // calmVideo.muted = !calmVideo.muted;
    // calmVideo.volume = 0.5;
  }
}
