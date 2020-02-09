import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../../models/article';

type UrlType = 'url' | 'file';

enum UrdType {
  toResource = 'url',
  toFile = ''
}

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleFormComponent implements OnInit {
  form: FormGroup;

  @Input() article: Article;
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<never>();

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      id: null,
      title: [null, [Validators.required, Validators.minLength(4)]],
      content: [null, [Validators.required]],

      author: null,
      description: null,
      publishedAt: null,

      url: null,
      urlToImage: null,

      imageFrom: 'url'
    });
  }

  ngOnInit() {
    this.form.patchValue(this.article);
  }

  get title() {
    return this.form.controls.title;
  }
  get content() {
    return this.form.controls.content;
  }
  get imageFrom() {
    return this.form.controls.imageFrom;
  }

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }
  onCancel() {
    this.formCancel.emit();
  }
}
