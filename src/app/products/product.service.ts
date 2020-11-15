import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { IProduct } from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {catchError,tap} from 'rxjs/operators'

@Injectable({
    providedIn:'root'
})
export class ProductService{

  private productUrl = 'api/products/products.json';
  constructor(private http : HttpClient){

  }
    getProduct() : Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl)
        .pipe(
          tap(data =>console.log('All: '+JSON.stringify(data))),
          catchError(this.handleError)
        );
       }

        private handleError(err:HttpErrorResponse){
          let erroeMessage='';
          if(err.error instanceof ErrorEvent)
          {
            erroeMessage = `An error occured: ${err.error.message}`;
          }else{
            erroeMessage =`Server returned Code: ${err.status},error message is : ${err.message}`;
          }
          console.log(erroeMessage);
            return throwError(erroeMessage);
        }
}