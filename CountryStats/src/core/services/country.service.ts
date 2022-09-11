import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../constants/api.constant';
import { Countries } from './models/country.model';


@Injectable()
export class CountryService
{
    constructor(private readonly http: HttpClient)
    { }

    public getAllCountries(): Observable<Array<Countries>>
    {
        return this.http.get<Array<Countries>>(api.all());
    }

    // public getCountryNames(name: string): Observable<any>
    // {
    //     return this.http.get(api.name(name));
    // }

    // public getCountryCode(code: string): Observable<any>
    // {
    //     return this.http.get(api.name(code));
    // }
}