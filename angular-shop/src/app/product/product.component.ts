import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  ProductTitle :String = "Ürünler"
  products : Product[] = [
    {id: 1, name: "Asus Laptop", price: 5000, categoryId: 1, description: "Asus x6 nesil dizüstü PC", imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7k2EeWog9LcDUQ7JMBAPtPG0iSiRGfn314HE-gDhTMP2KEDoGit5YpYdULllHoZdHdQ&usqp=CAU"},
    {id: 1, name: "Monster Laptop", price: 15000, categoryId: 2, description: "Monster x6 6 Çekirdekli Yeni Nesil Canavar", imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7k2EeWog9LcDUQ7JMBAPtPG0iSiRGfn314HE-gDhTMP2KEDoGit5YpYdULllHoZdHdQ&usqp=CAU"},
    {id: 1, name: "Macbook Laptop", price: 40000, categoryId: 3, description: "Macbook Pro 18 çekirdekli yeni nesil diz üstü PC", imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7k2EeWog9LcDUQ7JMBAPtPG0iSiRGfn314HE-gDhTMP2KEDoGit5YpYdULllHoZdHdQ&usqp=CAU"},
    {id: 1, name: "Léon Laptop", price: 5000, categoryId: 4, description: "Yeni nesil, oyuncu refahı", imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7k2EeWog9LcDUQ7JMBAPtPG0iSiRGfn314HE-gDhTMP2KEDoGit5YpYdULllHoZdHdQ&usqp=CAU"}
  ]
}
