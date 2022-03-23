import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RecipeModel} from "../../recipes.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: RecipeModel;
  @Output() itemSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem() {
    this.itemSelected.emit();
  }

}
