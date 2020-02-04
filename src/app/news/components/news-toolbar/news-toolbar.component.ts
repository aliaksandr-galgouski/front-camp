import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NewsSource } from '../../shared/news-source';
import { NewsService } from '../../shared/news.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news-toolbar',
  templateUrl: './news-toolbar.component.html',
  styleUrls: ['./news-toolbar.component.scss']
})
export class NewsToolbarComponent implements OnInit {
  source: FormControl;
  mineFlag: FormControl;
  filterGroup: FormGroup;

  filteredSources$: Observable<NewsSource[]>;

  @Input() sources: Observable<NewsSource[]>;
  @Output() addNewsClick = new EventEmitter<any>();
  @Output() sourceChanged = new EventEmitter<NewsSource>();
  @Output() filterChanged = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.source = this.formBuilder.control(null);
    this.mineFlag = this.formBuilder.control(false);
    this.filterGroup = this.formBuilder.group({ filter: '' });
  }

  ngOnInit() {
    this.filteredSources$ = combineLatest(
      this.sources,
      this.mineFlag.valueChanges
    ).pipe(
      map(([sources, mineFlag]) => {
        return mineFlag ? sources.filter(s => s.isMine) : sources;
      })
    );

    this.source.valueChanges.subscribe(value => this.sourceChanged.emit(value));
    this.filterGroup.valueChanges.subscribe(value =>
      this.onFilterChanged(value)
    );

    this.mineFlag.setValue(false, { emitEvent: true });
  }

  onFilterChanged(value) {
    this.filterChanged.emit(value.filter);
  }

  onAddNews() {
    this.addNewsClick.emit();
  }

  compareFn(source1: NewsSource, source2: NewsSource) {
    return source1 && source2 ? source1.id === source2.id : source1 === source2;
  }
}
