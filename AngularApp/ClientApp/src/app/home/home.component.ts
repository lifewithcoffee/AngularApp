import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myFooList = ['Some Item', 'Item Second', 'Other In Row', 'What to write', 'Blah To Do']
  
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  progressValue = 90;

  constructor(public dialog: MatDialog) {}
  
  openCompDialog() {
    const myCompDialog = this.dialog.open(DialogDemoComponent, { data: this.myFooList });
    myCompDialog.afterClosed().subscribe((res) => {
      // Data back from dialog
      console.log({ res });
    });
  }
}
