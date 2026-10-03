import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  signal,
} from '@angular/core';

import { CATEGORIES, WORK } from '../../core/data/portfolio.data';
import { WorkItem } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Work {
  /**
   * Portfolio categories used by the filter buttons.
   */
  readonly categories = CATEGORIES;

  /**
   * All portfolio work items.
   */
  readonly items = WORK;

  /**
   * Currently selected category.
   *
   * UI/UX is shown by default.
   */
  readonly activeCategory = signal<string>('uiux');

  /**
   * Currently selected project for the full-screen preview.
   */
  readonly selectedItem = signal<WorkItem | null>(null);

  /**
   * Projects displayed in the grid based on
   * the currently selected category.
   */
  readonly visibleItems = computed(() => {
    const category = this.activeCategory();

    return this.items.filter(
      (item) => item.category === category
    );
  });

  /**
   * Change the active portfolio category.
   */
  select(category: string): void {
    this.activeCategory.set(category);
    this.closePreview();
  }

  /**
   * Open a project in the full-screen image preview.
   */
  openPreview(item: WorkItem): void {
    this.selectedItem.set(item);

    document.body.classList.add('work-lightbox-open');
  }

  /**
   * Close the full-screen image preview.
   */
  closePreview(): void {
    this.selectedItem.set(null);

    document.body.classList.remove('work-lightbox-open');
  }

  /**
   * Close the lightbox when Escape is pressed.
   */
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.selectedItem()) {
      this.closePreview();
    }
  }
}