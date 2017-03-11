export class Product{
    _id: any;
    title: string;
    price: string;
    state: string;

    constructor(id: any, title: string, price: string, state: string){
        this._id = id;
        this.title = title;
        this.price = price;
        this.state = state;
  }
}