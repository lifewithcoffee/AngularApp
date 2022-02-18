import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.css']
})
export class ListDemoComponent implements OnInit {

  techList = [
    {id: 101, lang: 'Java'},
    {id: 102, lang: 'Angular'},
    {id: 103, lang: 'Hibernate'}
  ];
  
  techForm = this.formBuilder.group({
    selectedTech: ''
  });
  
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void { }

  onFormSubmit() {
    console.log(this.techForm.get('selectedTech')?.value);
  }
}
