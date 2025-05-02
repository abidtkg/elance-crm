import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-create-product',
    standalone: false,
    templateUrl: './create-product.component.html',
    styleUrl: './create-product.component.scss'
})
export class CreateProductComponent implements OnInit {

    constructor(
        private Product: ProductService
    ){}

    ngOnInit(): void {
        
    }

    create(){
        
    }
}
