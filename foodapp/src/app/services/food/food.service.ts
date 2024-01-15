import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag:string):Foods[]{
    return  tag=="All"?
    this.getAll():this.getAll().filter(food=>food.tags?.includes(tag));
  }
  getAll(): Foods[]{
    return [
      {
        id:1,
        name:'pizza',
        cooktime:10-20,
        price:10,
        Favorite:true,
        origin:'italy',
        star:4.5,
        imageUrl:'../assets/2.jpeg',
        tags:['fast','food','lunch']
      },
      {
        id:1,
        name:'burgar',
        cooktime:10-20,
        price:10,
        Favorite:true,
        origin:'italy',
        star:4.5,
        imageUrl:'/assets/2.jpeg',
        tags:['fast','lunch','breakfast']
      },
      
    ]
  }
}
