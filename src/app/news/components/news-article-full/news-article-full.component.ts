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
  selector: 'app-news-article-full',
  templateUrl: './news-article-full.component.html',
  styleUrls: ['./news-article-full.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsArticleFullComponent implements OnInit {
  @Input() news: News;
  @Input() canDelete: boolean;

  @Output() editClick = new EventEmitter<any>();
  @Output() deleteClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    console.log(this.news);
  }

  onEdit() {
    this.editClick.emit(this.news.id);
  }

  onDelete() {
    this.deleteClick.emit(this.news.id);
  }
}
