import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

private baseUrl = 'http://localhost:8080/api/products';
private categoryUrl = 'http://localhost:8080/api/product-category';
  constructor(private httpClient:HttpClient) { }


  getProduct(theProductId: number):Observable<Product>{
    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;
    //we call our rest api based on the product id
    return this.httpClient.get<Product>(productUrl);
  }

  getProductListPaginate(thePage:number,
                        thePageSize:number,
                        theCategoryId:number):Observable<GetResponseProducts>{
    // need to build URL based on category id , page and size
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                      +`&page=${thePage}&size=${thePageSize}`;
                      return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  getProductList(theCategoryId:number):Observable<Product[]>{
    // need to build URL based on category id 
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.getProducts(searchUrl);
  }


  searchProducts(theKeyword: string):Observable<Product[]>{
    // need to build URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.getProducts(searchUrl);
  }


 searchProductsPaginate(thePage:number,
    thePageSize:number,
    theKeyword:string):Observable<GetResponseProducts>{
// need to build URL based on keyword , page and size
const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
  +`&page=${thePage}&size=${thePageSize}`;
  return this.httpClient.get<GetResponseProducts>(searchUrl);
}
  
  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductCategories():Observable<ProductCategory[]>{
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }
}
interface GetResponseProducts{
  _embedded:{
    products:Product[];
  },
  page:{
    size:number,
    totalElements:number,
    totalPages:number,
    number:number
  }
}
interface GetResponseProductCategory{
  _embedded:{
    productCategory:ProductCategory[];
  }
}