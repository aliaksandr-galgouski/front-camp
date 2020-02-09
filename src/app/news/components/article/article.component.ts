import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  editable: boolean;

  @Input() article: Article;
  @Input() displayType: 'full' | 'short' = 'full';

  @Output() edit = new EventEmitter<Article>();
  @Output() delete = new EventEmitter<Article>();
  @Output() readMore = new EventEmitter<Article>();

  constructor() {}

  ngOnInit() {
    this.editable = this.article.id !== undefined;
  }

  onEdit() {
    this.edit.emit(this.article);
  }

  onDelete() {
    this.delete.emit(this.article);
  }

  onReadMore() {
    this.readMore.emit(this.article);
  }
}
