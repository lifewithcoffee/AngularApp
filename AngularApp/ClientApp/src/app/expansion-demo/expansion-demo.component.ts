import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-expansion-demo',
  templateUrl: './expansion-demo.component.html',
  styleUrls: ['./expansion-demo.component.css']
})
export class ExpansionDemoComponent implements OnInit {

  @ViewChild(MatAccordion) accordion1?: MatAccordion; // _note_: use @ViewChild(MatAccordion)

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  openAllPanels() {
    this.accordion1?.openAll();
  }
}
