import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number){
    return this.getAll().find(food=>food.id==id);

  }


  getAllFoodByTag(tag: string): Foods[] {
    if (tag === "All") {
        return this.getAll();
    } else {
        return this.getAll().filter(food => food.tags?.includes(tag));
    }
}


  getAllTag(){

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
        id:1,
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
        id:1,
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
        id:1,
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
        id:1,
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
        id:1,
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
        id:1,
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
        id:1,
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
