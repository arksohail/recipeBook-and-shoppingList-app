import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://cdn.pixabay.com/photo/2016/07/22/05/07/delicious-1534207__340.jpg'),
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://cdn.pixabay.com/photo/2016/07/22/05/07/delicious-1534207__340.jpg')
  ];
  
  constructor() {}

}
