import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { News } from '../../shared/News';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  form: FormGroup;

  @Input() news: News;
  @Output() saveClick: EventEmitter<any> = new EventEmitter();
  @Output() cancelClick: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      heading: ['', [Validators.required]],
      content: ['', [Validators.required]],
      shortDiscription: [''],
      urlType: ['', [Validators.required]],
      imageUrl: '',
      author: '',
      date: ''
    });

    this.load();

    this.form.markAsUntouched();
  }

  load() {
    this.form.setValue({
      heading: this.news.heading || '',
      content: this.news.content || '',
      shortDiscription: this.news.shortDiscription || '',
      urlType: this.news.urlType || 'url',
      imageUrl: this.news.imageUrl || '',
      author: this.news.author || 'Me',
      date: this.news.date || new Date()
    });
  }

  isUrl(): boolean {
    return this.form.controls.urlType.value === 'url';
  }

  onSubmit() {
    this.saveClick.emit(this.form.value);
  }

  onCancel() {
    this.cancelClick.emit();
  }
}
