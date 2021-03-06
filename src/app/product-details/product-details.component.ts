import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** import my components or services */
import { products } from '../products';
import { CartService } from '../cart.service';

/** Decorator */
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  /** Dependency Inyection */
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}