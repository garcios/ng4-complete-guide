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
     new Recipe('A Test Receipe','This is simply a test','https://realfood.tesco.com/media/images/TescoWinter40-18GreekChicken-1400x919-f075adee-5ae5-4347-a14a-9ea69a482ce1-0-1400x919.jpg')
   ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    console.log('RecipeListComponent:' + recipe);
    this.recipeWasSelected.emit(recipe);
  }

}
