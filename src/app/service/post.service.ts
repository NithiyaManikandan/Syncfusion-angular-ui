import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  postData(data: FormGroup) {
    return this.http.post(`http://localhost:3000/posts`, data);
  }

  getData(){
    return this.http.get(`http://localhost:3000/posts`);
  }
}
