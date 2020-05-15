import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NetworkService<T> {
    private api_url: string = 'http://localhost:9002';

    constructor(private httpClient: HttpClient) {}

    public get(endpoint: string): Observable<T> {
        return this.httpClient.get<T>(`${this.api_url}/${endpoint}`);
    }

    public post(endpoint: string, content: T): Observable<T> {
        return this.httpClient.post<T>(`${this.api_url}/${endpoint}`, content);
    }
}
