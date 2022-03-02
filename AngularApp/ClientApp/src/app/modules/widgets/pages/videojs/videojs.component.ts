import { Component, OnInit } from '@angular/core';
import * as videojs from 'video.js';
// import videojs from 'video.js';

@Component({
  selector: 'app-videojs',
  templateUrl: './videojs.component.html',
  styleUrls: ['./videojs.component.scss']
})
export class VideojsComponent implements OnInit {
  private ve;

  constructor() { }

  ngOnInit() {
    this.ve = document.getElementById('video1');
  }

  play() {
    // videojs('video1').play()
    videojs(this.ve).play();
  }

  pause() {
    // videojs('video1').pause()
    videojs(this.ve).pause();
  }
}
