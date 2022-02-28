import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Fruit loops' },
    ]
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          { name: 'Broccoli' },
          { name: 'Brussels sprouts' },
        ]
      }, {
        name: 'Orange',
        children: [
          { name: 'Pumpkins' },
          { name: 'Carrots' },
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-tree-demo',
  templateUrl: './tree-demo.component.html',
  styleUrls: ['./tree-demo.component.css']
})
export class TreeDemoComponent implements OnInit {

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  // _note_: transfer plain data node (FoodNode) to flat node (ExampleFlatNode)
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(node => node.level, node => node.expandable); // _note_: the tree control
  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
   }

  ngOnInit(): void {
  }

  // _note_: ngAfterViewInit()
  ngAfterViewInit() {
    console.table(this.treeControl.dataNodes); // _note_: view the log output to understand why expand dataNodes 4 and 8

    this.treeControl.expand(this.treeControl.dataNodes[0]);   // _note_: call treeControl.expand()
    this.treeControl.expand(this.treeControl.dataNodes[4]);
    this.treeControl.expand(this.treeControl.dataNodes[8]);
  }
}
