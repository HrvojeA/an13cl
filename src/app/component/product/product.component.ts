import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productData: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProductData().subscribe((data) => {
      this.productData = data;
    });
  }

}
