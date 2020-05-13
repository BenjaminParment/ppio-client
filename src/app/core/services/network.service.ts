import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NetworkService<T> {
    private apiUrl: string = 'http://localhost:9002';
    private corsHeaders: HttpHeaders;

    constructor(private httpClient: HttpClient) {
        this.corsHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
        });
    }

    public get(endpoint: string): Observable<T> {
        return this.httpClient.get<T>(`${this.apiUrl}/${endpoint}`);
    }

    public post(endpoint: string, content: T): Observable<T> {
        return this.httpClient.post<T>(`${this.apiUrl}/${endpoint}`, content, { headers: this.corsHeaders });
    }
}
