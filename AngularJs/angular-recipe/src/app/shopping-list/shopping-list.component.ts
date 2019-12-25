import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { stringify } from 'querystring';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    if (this.ingredientsInputValidation(ingredient)) {
      this.ingredients.push(ingredient);
    }
  }

  ingredientsInputValidation(ingredient: Ingredient) {
    if (ingredient.name == '') {
      alert('Name required');
      return false;
    }

    if(ingredient.amount<=0){
      alert ('Amount must be > 0 ');
      return false;
    }

    return true;
  }

}
