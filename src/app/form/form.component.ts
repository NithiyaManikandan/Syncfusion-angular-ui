import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  formSumitAttempt: boolean | undefined;
  public data: string[] = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];
  public dateValue: Date = new Date();
  constructor(private formBuilder: FormBuilder, private service: PostService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      salary: [null, Validators.required],
      game: [null, Validators.required],
      dob: [null, Validators.required],
    });
  }

  onSubmit() {
    this.formSumitAttempt = true;
    if (this.form.valid) {
      console.log('form submitted');
      console.log(this.form.value);
      this.service.postData(this.form.value).subscribe();
    }
    this.form.reset()
  }
  reset() {
    this.form.reset();
    this.formSumitAttempt = false;
  }
}
