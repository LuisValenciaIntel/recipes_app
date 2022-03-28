import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipes.model";
import {RecipesService} from "../../recipes.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: RecipeModel;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  onSelectItem() {
    this.recipesService.getItemSelected(this.recipe);
  }

}
