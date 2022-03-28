import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { IngredientModel } from "../../shared/models/ingredient.model";
import { ShoppingService } from "../shopping.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild("nameInput") nameInputRef!: ElementRef;
  @ViewChild("amountInput") amountInputRef!: ElementRef;
	
	constructor(private shoppingService: ShoppingService) {
	}

  onAddIngredients() {
    const nameValue = this.nameInputRef.nativeElement.value;
    const amountValue = this.amountInputRef.nativeElement.value;
    const newIngredient = new IngredientModel(nameValue, amountValue);
    this.shoppingService.addIngredient(newIngredient)
		this.shoppingService.newIngredientAdded();
  }

}
