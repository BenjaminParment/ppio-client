import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NetworkService<T> {
    private api_url: string = 'http://localhost:9002';
    private corsHeaders: HttpHeaders;

    constructor(private httpClient: HttpClient) {
        this.corsHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
        });
    }

    public get(endpoint: string): Observable<T> {
        return this.httpClient.get<T>(`${this.api_url}/${endpoint}`, {
            headers: this.corsHeaders,
        });
    }

    public post(endpoint: string, content: T): Observable<T> {
        return this.httpClient.post<T>(`${this.api_url}/${endpoint}`, content, {
            headers: this.corsHeaders,
        });
    }
}
