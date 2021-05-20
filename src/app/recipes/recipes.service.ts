import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'palak paneer',
      imageUrl:
        'https://www.whiskaffair.com/wp-content/uploads/2019/06/Palak-Paneer-1-1.jpg',
      ingredients: ['Spinach','Paneer','Salad']
    },
    {
      id: 'r2',
      title: 'Humus',
      imageUrl:'https://www.thespruceeats.com/thmb/4z4G46wCGxLc4XVt3HSeEU6WjEE=/2048x1365/filters:fill(auto,1)/hummus-with-tahini-2355351-15_preview-5af9c9a5c5542e00361bdc0d.jpeg',
      ingredients: ['chickpeas','lemon','vinegar']
    }
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
