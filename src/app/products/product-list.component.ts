import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
selector:'pm-products',
templateUrl:'./product-list.component.html',
  styleUrls:['./product-list.component.css']

})

export class ProductListComponent implements OnInit{


    pageTitle:string ='Product List';
    imageWidth:number=40;
    imageMargin:number =2;
    showImage : boolean = false;
    _listFilter : string ;
    get listFilter():string{
      return this._listFilter
        }
        set listFilter(value:string){
          this._listFilter=value;
          this.filteredProducts = this.listFilter? this.peformFilter(this.listFilter):this.products; 
        }   

    filteredProducts : IProduct[];
    products:IProduct[]=[];

      constructor(private productService: ProductService){
      }
      ngOnInit(): void {
        this.products = this.productService.getProduct() ;
        this.filteredProducts = this.products;

      }

      peformFilter(filterBy :string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1);
      }

       toogleImage():void{
         this.showImage = !this.showImage;

      }

      onRatingClicked(message:string):void{
        this.pageTitle= 'Product List : ' + message;
      }
}