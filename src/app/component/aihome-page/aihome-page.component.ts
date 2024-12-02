import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiAIService } from '../../service/api-ai.service';

@Component({
  selector: 'app-aihome-page',
  templateUrl: './aihome-page.component.html',
  styleUrl: './aihome-page.component.sass'
})
export class AIHomePageComponent {

  form: FormGroup;
  response: string | null = null;

  constructor(private fb: FormBuilder, private apiService: ApiAIService) {
    this.form = this.fb.group({
      description: [''],
    });
  }

  onSubmit() {
    const description = this.form.value.description;
    this.apiService.generateContent(description).subscribe(
      (res) => {
       // this.response = JSON.stringify(res, null, 2); // Display formatted response
       if (res && res.candidates && res.candidates.length > 0) {
        this.response = res.candidates[0]?.content?.parts[0]?.text || 'No content found';
      } else {
        this.response = 'No candidates found';
      }
      },
      (error) => {
        console.error('Error:', error);
        this.response = 'Error generating content. Please check your input or API key.';
      }
    );
  }



 

}
