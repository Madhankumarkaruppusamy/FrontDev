import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties() {
    return this.http.get<{ [key: string]: IProperty }>('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<IProperty> = [];
        for (const Id in data) {
          if (data.hasOwnProperty(Id)) {
            propertiesArray.push(data[Id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
