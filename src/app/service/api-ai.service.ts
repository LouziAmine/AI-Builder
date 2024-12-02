import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAIService {



  private apiKey = 'YOUR_API_KEY'; // Replace with your API key
  private apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  generateContent(description: string): Observable<any> {
    const payload = {
      contents: [
        {
          parts: [
            {
              text: description,
            },
          ],
        },
      ],
    };
    return this.http.post(this.apiUrl, payload);
  }
}
