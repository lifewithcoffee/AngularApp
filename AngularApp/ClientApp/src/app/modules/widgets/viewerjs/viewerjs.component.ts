import { Component, OnInit } from '@angular/core';
import Viewer from 'viewerjs/dist/viewer.esm';

@Component({
  selector: 'app-viewerjs',
  templateUrl: './viewerjs.component.html',
  styleUrls: ['./viewerjs.component.scss']
})
export class ViewerjsComponent implements OnInit {

  viewer;

  constructor() { }

  ngOnInit() {
    const options = { };
    this.viewer = new Viewer(document.getElementById('images'), options);
  }
}
