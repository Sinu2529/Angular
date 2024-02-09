import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getAll() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food=>food.id==id)!;

  }


  getAllFoodByTag(tag: string): Foods[] {
    if (tag === "All") {
        return this.getAll();
    } else {
        return this.getAll().filter(food => food.tags?.includes(tag));
    }
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
        imageUrl:'../assets/1.jpg',
        tags:['fast','food','lunch']
      },
      {
        id:2,
        name:'combor',
        cooktime:10-20,
        price:10,
        Favorite:true,
        origin:'italy',
        star:4.5,
        imageUrl:'/assets/2.webp',
        tags:['fast','lunch','breakfast']
      },
      {
        id:3,
        name:'noodle',
        cooktime:10-20,
        price:10,
        Favorite:true,
        origin:'italy',
        star:4.5,
        imageUrl:'/assets/3.jpg',
        tags:['fast','lunch','breakfast']
      },
      {
        id:4,
        name:'franky',
        cooktime:10-20,
        price:10,
        Favorite:true,
        origin:'italy',
        star:4.5,
        imageUrl:'/assets/4.avif',
        tags:['fast','lunch','breakfast']
      },
      {
        id:5,
        name:'non veg burger',
        cooktime:10-20,
        price:10,
        Favorite:true,
        origin:'italy',
        star:4.5,
        imageUrl:'/assets/5.avif',
        tags:['fast','lunch','breakfast']
      },
      {
        id:6,
        name:'spicy burger',
        cooktime:10-20,
        price:10,
        Favorite:true,
        origin:'italy',
        star:4.5,
        imageUrl:'/assets/9.jpg',
        tags:['fast','lunch','breakfast']
      },
      {
        id:7,
        name:'sandwich',
        cooktime:10-20,
        price:10,
        Favorite:true,
        origin:'italy',
        star:4.5,
        imageUrl:'/assets/7.avif',
        tags:['fast','lunch','breakfast']
      },
      {
        id:8,
        name:'chicken balls',
        cooktime:10-20,
        price:10,
        Favorite:true,
        origin:'italy',
        star:4.5,
        imageUrl:'/assets/8.png',
        tags:['fast','lunch','breakfast']
      },
      
      
    ]
  }
}
