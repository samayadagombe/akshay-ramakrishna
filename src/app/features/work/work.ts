import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CATEGORIES, WORK } from '../../core/data/portfolio.data';
import { WorkCategory } from '../../core/models/portfolio.models';
import { WorkCard } from './work-card/work-card';

@Component({
  selector: 'app-work',
  imports: [WorkCard],
  templateUrl: './work.html',
  styleUrl: './work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Work {
  protected readonly categories = CATEGORIES;
  protected readonly activeCategory = signal<WorkCategory>('uiux');

  protected readonly visibleItems = computed(() =>
    WORK.filter((item) => item.category === this.activeCategory()),
  );

  protected select(category: WorkCategory): void {
    this.activeCategory.set(category);
  }
}
