import { Component, ViewChild } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  isExpanded = true;
  showSubmenu = true;
  isShowing = true;
  showSubSubMenu = true;
  isSelected = true;

  onListSelectionChange(evt: MatSelectionListChange){
    console.log(evt.source);
  }

  mouseenter() {
    if (!this.isExpanded) {
      // this.isShowing = true;
      console.log('mouseenter');
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      // this.isShowing = false;
      console.log('mouseleave');
    }
  }
}
