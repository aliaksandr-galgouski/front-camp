import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { News } from '../../shared/News';

@Component({
  selector: 'app-news-article-short',
  templateUrl: './news-article-short.component.html',
  styleUrls: ['./news-article-short.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsArticleShortComponent implements OnInit {
  @Input() news: News;
  @Input() canDelete: boolean;

  @Output() editClick = new EventEmitter<any>();
  @Output() deleteClick = new EventEmitter<any>();
  @Output() readMoreClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onEdit() {
    this.editClick.emit(this.news.id);
  }

  onDelete() {
    this.deleteClick.emit(this.news.id);
  }

  onReadMore() {
    this.readMoreClick.emit(this.news.id);
  }
}
