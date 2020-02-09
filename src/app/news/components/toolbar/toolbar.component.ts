import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ArticleSource } from '../../models/article-source';
import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const DEBOUNCE = 300;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit, OnChanges, OnDestroy {
  private sub: Subscription;
  filter$ = new Subject<string>();
  filter = new FormControl();
  source = new FormControl();

  @Input() sources: ArticleSource[];

  @Output() addArticle = new EventEmitter<never>();
  @Output() filterChange = new EventEmitter<string>();
  @Output() sourceChange = new EventEmitter<ArticleSource>();

  constructor() {}

  ngOnInit() {
    this.sub = this.filter.valueChanges
      .pipe(debounceTime(DEBOUNCE))
      .subscribe(() => {
        this.onFilterChanged();
      })
      .add(
        this.source.valueChanges.subscribe(() => {
          this.onSourceChanged();
        })
      );
  }

  ngOnChanges() {
    this.reset();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  reset() {
    this.resetFilter();
    this.source.patchValue(this.sources[0]);
  }

  resetFilter() {
    this.filter.patchValue('');
  }

  onAddArticle() {
    this.addArticle.emit();
  }

  onFilterChanged() {
    this.filterChange.emit(this.filter.value);
  }

  onSourceChanged() {
    this.sourceChange.emit(this.source.value);
  }
}
