import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RecipeModel } from '../recipes.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[]
  @Output() itemSelectFromList = new EventEmitter<RecipeModel>();

  constructor() {
    this.recipes = [
      new RecipeModel("A test Recipe", 'This is a simple test', "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
      new RecipeModel("A test Recipe 2", 'This is a simple test', "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg")
    ]
  }

  ngOnInit(): void {
  }

  onItemSelected(recipe: RecipeModel) {
    this.itemSelectFromList.emit(recipe);
  }

}
