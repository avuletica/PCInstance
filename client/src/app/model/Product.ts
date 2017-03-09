export class Product{
    _id: any;
    title: string;
    price: string;

    constructor(id: any, title: string, price: string){
        this._id = id;
        this.title = title;
        this.price = price;
  }
}