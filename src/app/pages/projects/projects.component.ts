import { Component, OnInit } from '@angular/core';
import { ProductService } from './productservice';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  products: any[] = [];
  responsiveOptions: any[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().then((products: any) => {
      this.products = products;
    });
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
