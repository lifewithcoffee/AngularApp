import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';
import { DialogDemoComponent } from '../../components/dialog-demo/dialog-demo.component';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // for tree demo
  myFooList = ['Some Item', 'Item Second', 'Other In Row', 'What to write', 'Blah To Do']
  
  // for progress spinner demo
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  progressValue = 90;

  // for autocompletion demo
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  constructor(public dialog: MatDialog) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

    // _note_: get |input| value change
    this.myControl.valueChanges.subscribe(x => {
      console.log(`value changed to: ${x}`);
    });
  }
  
  openCompDialog() {
    const myCompDialog = this.dialog.open(DialogDemoComponent, { data: this.myFooList });
    myCompDialog.afterClosed().subscribe((res) => {
      // Data back from dialog
      console.log({ res });
    });
  }
}
