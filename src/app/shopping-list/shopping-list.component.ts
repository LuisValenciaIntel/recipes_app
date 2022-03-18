import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/models/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [];

  constructor() {
    this.ingredients = [
      new IngredientModel('Apples', 5),
      new IngredientModel('Tomates', 10),
      new IngredientModel('Potato', 4),
    ]
  }

  ngOnInit(): void {
  }

}
