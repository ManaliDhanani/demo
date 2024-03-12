import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class ProductService {
    private productDetailsArray: any[] = [];

    constructor(){}

    setProductDetailsArray(details: any[]) {
        this.productDetailsArray = details;
    }

    getProductDetailsArray(): any[] {
        return this.productDetailsArray;
    }

}
