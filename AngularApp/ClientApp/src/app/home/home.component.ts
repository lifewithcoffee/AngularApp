import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myFooList = ['Some Item', 'Item Second', 'Other In Row', 'What to write', 'Blah To Do']
  
  constructor(public dialog: MatDialog) {}
  
  openCompDialog() {
    const myCompDialog = this.dialog.open(DialogDemoComponent, { data: this.myFooList });
    myCompDialog.afterClosed().subscribe((res) => {
      // Data back from dialog
      console.log({ res });
    });
  }
}
