import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RecipeModel } from '../../shared/models/recipes.model'
import { RecipesService } from "../recipes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = []

  constructor(private recipesService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
			this.recipes = this.recipesService.getRecipes();
  }
  onNewRecipe(){
    console.log(this.route)
    this.router.navigate(["new"], { relativeTo: this.route })
  }
}
