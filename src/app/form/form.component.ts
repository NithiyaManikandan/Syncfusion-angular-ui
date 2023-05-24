import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../service/post.service';
import { FormValidators } from '@syncfusion/ej2-angular-inputs';

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
      name: [null, [FormValidators.required]],
      email: [null, [FormValidators.email]],
      salary: [null, [FormValidators.required]],
      game: [null, [FormValidators.required]],
      dob: [null, [FormValidators.date]],
    });
  }

  onSubmit() {
    this.formSumitAttempt = true;
    if (this.form.valid) {
      console.log('form submitted');
      console.log(this.form.value);
      this.service.postData(this.form.value).subscribe();
    }
    this.form.reset();
  }
  reset() {
    this.form.reset();
    this.formSumitAttempt = false;
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get salary() { return this.form.get('salary'); }
  get game() { return this.form.get('game'); }
  get dob() { return this.form.get('dob'); }
}
