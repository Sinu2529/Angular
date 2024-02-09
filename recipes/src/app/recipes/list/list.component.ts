import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('A Test', 'Desc', 'assets/1.jpg'),
    new Recipe('food Test', 'Desc', 'assets/3.jpg')
  ];

  constructor(){

  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

  ngOnInit(): void {
    
  }
}
