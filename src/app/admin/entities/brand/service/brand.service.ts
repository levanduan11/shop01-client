import { Injectable } from '@angular/core';
import { type } from 'os';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { getBrandIdentifier, IBrand } from '../model/brand.model';
import { environment } from 'src/environments/environment.prod';
import { Observable, BehaviorSubject, tap, map } from 'rxjs';

export type EntityResponseType = HttpResponse<IBrand>;
export type EntityListResponseType = HttpResponse<IBrand[]>;

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private resource = environment.API_LOCAL + 'admin/brands';
  private brands = new BehaviorSubject<IBrand[] | null>(null);
  constructor(private http: HttpClient) {
    this.fetchBrands();
  }

  create(brand: IBrand): Observable<EntityResponseType> {
    return this.http.post<IBrand>(`${this.resource}`, brand, {
      observe: 'response',
    });
  }
  update(brand: IBrand): Observable<EntityResponseType> {
    return this.http.put<IBrand>(
      `${this.resource}/${getBrandIdentifier(brand) as number}`,
      brand,
      {
        observe: 'response',
      }
    );
  }
  findAll(): Observable<EntityListResponseType> {
    return this.http.get<IBrand[]>(`${this.resource}`, {
      observe: 'response',
    });
  }
  getBrands(): Observable<IBrand[] | null>{
    return this.brands.asObservable();
  }

  private fetchBrands(): void{
    this.findAll().subscribe({
      next: (data: HttpResponse<IBrand[]>) => {
        this.brands.next(data.body);
      }
    })
  }

  finById(id: number): Observable<EntityResponseType> {
    return this.http.get<IBrand>(`${this.resource}/${id}`, {
      observe: 'response',
    });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.resource}/${id}`)
      .pipe(
        map(()=>this.fetchBrands())
      );
  }

  listCategory(name:string): Observable<string[]>{
    return this.http.get<string[]>(`${this.resource}/all/categories/${name}`);
  }
}
