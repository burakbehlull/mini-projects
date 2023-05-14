export class Product {
    id: number;
    name: string;
    price: number;
    categoryId: number;
    description: string;
    imageURL?: string;

  constructor(id: number, name: string, price: number, categoryId: number, description: string, imageURL: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.categoryId = categoryId;
    this.description = description;
    this.imageURL = imageURL;
  }
}
