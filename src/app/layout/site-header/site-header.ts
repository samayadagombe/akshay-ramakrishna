import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PROFILE } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(window:scroll)': 'onScroll()' },
})
export class SiteHeader {
  protected readonly name = PROFILE.name;

  /** True once the page is scrolled past the hero fold; drives the blurred bar. */
  protected readonly scrolled = signal(false);

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }
}
