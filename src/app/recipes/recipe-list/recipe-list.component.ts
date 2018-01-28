import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

   @Output() recipeWasSelected = new EventEmitter<Recipe>();

   recipes:Recipe[] =[
     new Recipe('A Test Recipe','This is simply a test','https://realfood.tesco.com/media/images/TescoWinter40-18GreekChicken-1400x919-f075adee-5ae5-4347-a14a-9ea69a482ce1-0-1400x919.jpg'),
     new Recipe('Another Recipe','This is simply a test','https://assets.epicurious.com/photos/56bb4a1f2388d8216df8060b/2:1/w_1260%2Ch_630/EP_02052016_mindyschicken_recipe.jpg')
   ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    console.log('RecipeListComponent:' + recipe);
    this.recipeWasSelected.emit(recipe);
  }

}
