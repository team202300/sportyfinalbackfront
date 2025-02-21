import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router // Inject Router here
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  deleteProduct(id: number | undefined): void {
    if (id && confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          alert('Product deleted successfully!');
          this.loadProducts(); // Reload the product list
        },
        error: (err) => {
          console.error('Error deleting product:', err);
        }
      });
    } else {
      console.error('Invalid product ID');
    }
  }

  editProduct(id: number | undefined): void {
    if (id) {
      // Navigate to the update page with the product ID
      this.router.navigate([`/product-update/${id}`]);
    } else {
      console.error('Invalid product ID');
    }
  }
  addProduct(): void {
    // Navigate to the add product page
    this.router.navigate(['/addpr']);
  }
  showdetailsProduct(id: number | undefined): void {
    if (id) {
      // Navigate to the update page with the product ID
      this.router.navigate([`/product-details/${id}`]);
    } else {
      console.error('Invalid product ID');
    }
  }
}
