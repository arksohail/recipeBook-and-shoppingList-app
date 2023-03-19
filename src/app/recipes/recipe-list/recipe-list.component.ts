import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chicken Curry', 'Indian Styled Chicken Korma Curry', 'https://tinyurl.com/4fj77wmn'),
    new Recipe('Big Fat Burger', 'American Hamburger with Beef Patty', 'https://tinyurl.com/4wpncd5k')
  ];

  onRecipeSelect(event: Recipe): void {
    this.recipeSelected.emit(event);
  }
  
  constructor() {}

}
