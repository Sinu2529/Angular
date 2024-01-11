import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A Test', 'Desc', ' E:\redbubble/1.jpg')
  ];

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
