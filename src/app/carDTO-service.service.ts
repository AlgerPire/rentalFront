import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDTOServiceService {

  private url = 'http://localhost:8080/car/';

  constructor(private http: HttpClient) {
  }

  findDto(): Observable<any> {
    return this.http.get(`${this.url}`+"listCars");
  }

  // addBook(book: Object): Observable<Object> {
  //   return this.http.post(`${this.url}`, book);
  // }
  //
  // deleteBook(id: number): Observable<any> {
  //   return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  // }


}
