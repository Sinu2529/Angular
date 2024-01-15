export class Foods{
    id!:number;
    price!:number;
    name!:string;
    Favorite:boolean=false;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    cooktime!:number;
    origin!:string;
}